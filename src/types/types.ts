interface PayLoad {
  username: string;
  isAdmin: boolean;
}

interface LoginData {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export type { PayLoad, LoginData, RegisterData };
