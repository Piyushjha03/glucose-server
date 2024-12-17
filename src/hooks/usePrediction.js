import { useState } from 'react';
import { predictGlucose } from '../services/api';

export function usePrediction() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const makePrediction = async (values) => {
    try {
      setLoading(true);
      setError(null);
      const result = await predictGlucose(values);
      setPrediction(result.prediction);
    } catch (err) {
      setError(err.message);
      setPrediction(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    prediction,
    loading,
    error,
    makePrediction
  };
}