type ButtonProps = {
  onclick: () => void;
  label: string | number;
}

const Button = ({ onclick, label }: ButtonProps) => {
  return <button onClick={onclick}>{label}</button>
}

export default Button;