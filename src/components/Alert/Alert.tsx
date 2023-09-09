import "./style.css";
type Props = {
  variant: string;
  message: string;
};

export const Alert = ({ variant, message }: Props) => {
  return (
    <div className={`Alert ${variant}`}>
      <span>{message}</span>
    </div>
  );
};
