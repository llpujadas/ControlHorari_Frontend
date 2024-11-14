// export type User = {
//     id: number,
//     fullName: string,
//     email: string,
//     email_verified_at: string,
//     role: "user" | "admin",
//     created_at: string,
//     updated_at: string
// }

export type User = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  enabled: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  username: string;
  authorities: [];
};

export type NewUserDto = {
  email: string;
  fullName: string;
  password: string;
};
