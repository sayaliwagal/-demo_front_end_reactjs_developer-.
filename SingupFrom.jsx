import React, { useState } from 'react';
import SignUp from './SignUp';
import Home from './Home';

const SingupFrom = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div>
        {!isSubmitted ? (
          <SignUp submitForm={submitForm} />
        ) : (
          <Home />
        )}
      </div>
    </>
  );
};

export default SingupFrom;