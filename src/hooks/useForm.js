import { useState } from 'react';

export function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numericValues = Object.keys(values).reduce((acc, key) => {
      acc[key] = parseFloat(values[key]);
      return acc;
    }, {});
    onSubmit(numericValues);
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
}