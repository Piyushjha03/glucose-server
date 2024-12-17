import React from 'react';
import { Container, Title } from '@mantine/core';
import PredictionForm from './components/PredictionForm';
import ResultDisplay from './components/ResultDisplay';
import { usePrediction } from './hooks/usePrediction';

function App() {
  const { prediction, loading, error, makePrediction } = usePrediction();

  return (
    <Container size="sm" py="xl">
      <Title order={1} mb="lg" ta="center">Glucose Level Prediction</Title>
      <PredictionForm onSubmit={makePrediction} loading={loading} />
      <ResultDisplay prediction={prediction} error={error} />
    </Container>
  );
}

export default App;