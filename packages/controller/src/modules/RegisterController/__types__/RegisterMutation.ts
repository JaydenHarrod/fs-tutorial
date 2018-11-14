export interface RegisterMutationRegister {
  path: string;
  message: string;
}

export interface RegisterMutation {
  register: RegisterMutationRegister[] | null;
}

export interface RegisterMutationVariables {
  email: string;
  password: string;
}
