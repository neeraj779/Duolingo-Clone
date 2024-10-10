export interface Option {
  text: string;
  image: string;
}

export interface Question {
  text: string;
  options: Option[];
}
