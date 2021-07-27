const Button = ({ type, text }) => {
  return <button type={type ? "text" : type}>{text}</button>;
};

export default Button;
