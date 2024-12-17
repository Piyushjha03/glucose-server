import React from 'react';
import { TextInput, Button, Stack, Group } from '@mantine/core';
import { useForm } from '../hooks/useForm';

function PredictionForm({ onSubmit, loading }) {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: {
      IR1: '',
      IR2: '',
      IR3: '',
      IR4: '',
      IR5: ''
    },
    onSubmit
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        {[1, 2, 3, 4, 5].map(num => (
          <TextInput
            key={num}
            label={`IR${num}`}
            name={`IR${num}`}
            value={values[`IR${num}`]}
            onChange={handleChange}
            type="number"
            step="0.01"
            required
            placeholder={`Enter IR${num} value`}
          />
        ))}
        <Group justify="center">
          <Button type="submit" loading={loading}>
            Predict Glucose Level
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

export default PredictionForm;