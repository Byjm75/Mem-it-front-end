export interface MemosProps {
  id: string;
  title: string;
  date_event: Date;
  body: string;
  image: string;
  url: string;
  date_creation: string;
  categorie_: Categories;
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

export interface ScrollCatProps {onSelectCatTitle: { (cat:Categories):void};
}

export interface CardcategoryProps {
  categoryAffich: Categories;
}

export interface CardmemoProps {
  memoAffich: MemosProps;
}

export interface DropdownPropsMemo {
  memo: MemosProps;
}

export interface DropdownPropsCat {
  category: Categories;
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

export interface SearchBarProps {
  onSearch: (userInput: string) => void;
}
