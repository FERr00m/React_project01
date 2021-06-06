import { useState } from 'react';

export function usePopup() {
  const [popup, setPopup] = useState(null);
  return { popup, setPopup };
}