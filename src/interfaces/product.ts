export interface Product {
  _id?: string;       //?indica opcional -> lo inicializa la BD
  name: string;
  description: string;
  imageURL: string;
  price: number;
  createAt?: Date     //?indica opcional -> lo inicializa la BD
}