interface ICreateWishDataDto {
    key: string;
    value: string;
}

export interface ICreateWishDto {
    name: string;
    wishListId: string;
    data: ICreateWishDataDto[];
}
