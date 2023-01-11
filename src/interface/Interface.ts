

export interface Memos {
  title: string;
  date_event: Date;
  body: string;
  image: string;
  url: string;
  date_creation: string;
}

export interface DecodTokenType {
  utilisateur: UserData;
  exp: number;
  iat: number;
}

export interface Categories {
  id: string;
  title: string;
  image: string;
  favoris: string;
}

export interface CardcategoryProps {
  categoryAffich: Categories;
}

export interface CardmemoProps {
  carte: Memos;
}

export interface TableUsers {
  users: UserData;
}

export interface UserData {
  id: string;
  pseudo: string;
  image: string;
  email: string;
  password: string;
  role: string;
}