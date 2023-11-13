export type TypeSliderProps = "none";

export interface SingleSliderProps {
  id: number;
  buttonTitle: string | null;
  entityTitle: string | null;
  imageUrl: string;
  link: string | null;
  logoImageUrl: string;
  mediumImageUrl: string;
  smallImageUrl: string;
  type: TypeSliderProps;
}

export interface HttpSliderProps {
  sliders: SingleSliderProps[];
}
