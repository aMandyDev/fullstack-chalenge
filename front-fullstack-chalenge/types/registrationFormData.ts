export interface RegistrationFormData {
    fullName: string;
    email: string;
    password: string;
    address: {
      street: string;
      number: string;
      neighborhood: string;
      city: string;
      state: string;
    };
  }
  