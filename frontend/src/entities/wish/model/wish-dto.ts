export interface IWishDto {
  id: string;
  name: string;
  data: {
    key: string;
    value: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
