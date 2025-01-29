import './Select.css';

type SelectProps<T> = {
  label: string;
  options: T[];
  value: string;
  onChange: (value: T) => void;
};

const Select = <T,>({ label, options, value, onChange }: SelectProps<T>) => {
  return (
    <div className="select-wrapper">
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="select-wrapper__select"
      >
        {options?.map((option, index) => (
          <option key={index} value={option as number}>
            {option as string}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
