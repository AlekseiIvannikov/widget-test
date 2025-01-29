import './SelectedBadgeList.css';

import { formatElementLabel } from '../../common/scripts.ts';
import Badge from '../UI/Badge/Badge.tsx';

interface SelectedElementListProps {
  list: number[];
  onRemove: (index: number) => void;
}

function SelectedBadgeList({ list, onRemove }: SelectedElementListProps) {
  return (
    <div className="selected-container">
      {list.map((element) => {
        const text = formatElementLabel(element);
        return <Badge key={element} text={text} onRemove={() => onRemove(element)} />;
      })}
    </div>
  );
}

export default SelectedBadgeList;
