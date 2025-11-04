export interface IWish {
  id: string;
  name: string;
  data: {
    key: string;
    value: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
