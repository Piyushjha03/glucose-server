import React from 'react';
import { Paper, Text, Alert } from '@mantine/core';

function ResultDisplay({ prediction, error }) {
  if (error) {
    return (
      <Alert color="red" mt="md">
        Error: {error}
      </Alert>
    );
  }

  if (prediction !== null) {
    return (
      <Paper shadow="sm" p="md" mt="md">
        <Text fw={500}>Predicted Glucose Level:</Text>
        <Text size="xl" fw={700} c="blue">
          {prediction.toFixed(2)} mg/dl
        </Text>
      </Paper>
    );
  }

  return null;
}

export default ResultDisplay;