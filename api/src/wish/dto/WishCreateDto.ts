interface WishData {
  key: string;
  value: string;
}

export interface WishCreateDto {
  name: string;
  categoryType: string;
  data: WishData[];
}
