import './Badge.css';

interface Props {
  text: string;
  onRemove?: () => void;
}

function Badge({ text, onRemove }: Props) {
  return (
    <div className="badge">
      <span className="badge__text">{text}</span>

      {onRemove && <div className="badge__remove" onClick={onRemove} />}
    </div>
  );
}

export default Badge;
