import { useState } from 'react';

export const useForm = (initialFields) => {
  const [values, setValues] = useState(initialFields);

  return [values, (e, resetObject) => {
    if (!resetObject){
      const { name, value } = e.target
      setValues({
      ...values,
      [name]: value
    })
    } else{
      setValues(resetObject)
    } 
  }]
}