export interface CardProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}