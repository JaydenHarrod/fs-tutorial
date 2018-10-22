import * as React from 'react';
import { RegisterView } from '../ui/RegisterView';
import { RegisterController } from '@abb/controller';

export const RegisterConnector = () => {
  return (
    <RegisterController>
      {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
    </RegisterController>
  );
};

export default RegisterConnector;
