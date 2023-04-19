import React, { useRef, useState } from 'react';

function useForm() {
  const form = useRef();
  const [send, setSend] = useState(false)
  return { form, send, setSend }
}

export default useForm;