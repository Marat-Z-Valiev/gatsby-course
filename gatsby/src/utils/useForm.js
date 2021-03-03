import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValues(e) {
    const { value } = e.target;
    if (e.target.type === 'number') {
      parseInt(value);
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return { values, updateValues };
}
