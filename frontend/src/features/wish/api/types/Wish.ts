export interface Wish {
  id: string;
  name: string;
  data: {
    key: string;
    value: string;
  }[];
  createdAt: string;
}
