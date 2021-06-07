import { useState } from 'react';

export const useSuccessMessage = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  return { successMessage, setSuccessMessage }
}