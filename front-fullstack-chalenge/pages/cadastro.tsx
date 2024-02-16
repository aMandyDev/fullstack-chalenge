import React from 'react';
import RegistrationForm from '../components/Registration'
import { RegistrationFormData } from '../types/registrationFormData';

const RegistrationPage: React.FC = () => {
  return (
    <RegistrationForm onSubmit={function (data: RegistrationFormData): void {
      throw new Error('Function not implemented.');
    }} />
  );
};

export default RegistrationPage;
