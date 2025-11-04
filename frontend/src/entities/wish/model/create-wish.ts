interface ICreateWishDataDto {
  key: string;
  value: string;
}

export interface ICreateWish {
  name: string;
  wishListId: string;
  data: ICreateWishDataDto[];
}
