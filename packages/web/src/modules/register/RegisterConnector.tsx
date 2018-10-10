import * as React from 'react';
import { RegisterView } from '../ui/RegisterView';

export const RegisterConnector = () => {
  const dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };
  return <RegisterView submit={dummySubmit} />;
};

export default RegisterConnector;
