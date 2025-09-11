export interface WishDto {
  id: string;
  name: string;
  data: {
    key: string;
    value: string;
  }[];
  createdAt: string;
}
