import './Input.css';

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

const Input = ({ label, value, onChange, type = 'text' }: InputProps) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-wrapper__input"
      />
    </div>
  );
};

export default Input;
