export interface WishCreateDto {
  categoryType: string;
  name: string;
  data: {
    key: string;
    value: string;
  }[];
}
