import './ElementsChoice.css';

import { useEffect, useState } from 'react';

import { filterOptions } from '../../common/filter.ts';
import { mockList, prefilteredListsMap } from '../../common/mockData.ts';
import { useSelectedElements } from '../../context/SelectedElementsContext.ts';
import { Filter } from '../../types';
import Checkbox from '../UI/Checkbox/Checkbox.tsx';
import Input from '../UI/Input/Input.tsx';
import Select from '../UI/Select/Select.tsx';
import VirtualList from '../UI/VirtualList/VirtualList.tsx';

const ElementsChoice = () => {
  const { tempSelection, toggleElement, initSelectedElements } = useSelectedElements();
  const [filter, setFilter] = useState<Filter>(filterOptions[0]);
  const [searchString, setSearchString] = useState<string>('');
  const [filteredList, setFilteredList] = useState<number[]>(mockList);

  const getFiltered = () => {
    return prefilteredListsMap[filter];
  };

  const applySearch = (list: number[]) => {
    return list.filter((element) => element.toString().includes(searchString.toLowerCase()));
  };

  useEffect(() => {
    initSelectedElements();
  }, []);

  useEffect(() => {
    const updatedList = applySearch(getFiltered());
    setFilteredList(updatedList);
  }, [filter, searchString]);

  return (
    <div className="elements-choice">
      <div className="elements-choice__filters">
        <Input label="Search" value={searchString} onChange={setSearchString} />

        <Select label="Filter" value={filter} options={filterOptions} onChange={setFilter} />
      </div>

      <VirtualList
        items={filteredList}
        itemHeight={40}
        renderItem={(item, index) => (
          <Checkbox
            label={item}
            checked={!!tempSelection.get(item)}
            key={index}
            onChange={() => toggleElement(item)}
          />
        )}
      />
    </div>
  );
};

export default ElementsChoice;
