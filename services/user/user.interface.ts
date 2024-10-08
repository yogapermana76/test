export type IUser = {
  id: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  fullname: string;
  address?: string;
  longitude?: number;
  latitude?: number;
  pictureUrl?: string;
  user: {
    id: number;
    createdAt: string;
    updatedAt: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    roleId: number;
  };
};
