import { ReactNode, useState } from 'react';

import SelectedElementsContext from '../context/SelectedElementsContext';

interface SelectedElementsProps {
  children: ReactNode;
}

const SelectedElementsProvider = ({ children }: SelectedElementsProps) => {
  const [selectedElements, setSelectedElements] = useState<Map<number, boolean>>(new Map());
  const [tempSelection, setTempSelection] = useState<Map<number, boolean>>(new Map());

  const initSelectedElements = () => {
    setTempSelection(selectedElements);
  };

  const toggleElement = (element: number) => {
    setTempSelection((prev) => {
      const newMap = new Map(prev);
      if (newMap.has(element)) {
        newMap.set(element, !newMap.get(element));
      } else {
        newMap.set(element, !(selectedElements.get(element) ?? false));
      }
      return newMap;
    });
  };

  const confirmSelection = () => {
    setSelectedElements((prev) => {
      const newMap = new Map(prev);
      tempSelection.forEach((value, key) => {
        newMap.set(key, value);
      });
      return newMap;
    });
    setTempSelection(new Map());
  };

  const cancelSelection = () => {
    setTempSelection(new Map());
  };

  const removeSelectedElement = (element: number) => {
    setSelectedElements((prev) => {
      const newMap = new Map(prev);
      newMap.delete(element);
      return newMap;
    });
  };

  return (
    <SelectedElementsContext.Provider
      value={{
        selectedElements,
        tempSelection,
        toggleElement,
        removeSelectedElement,
        confirmSelection,
        cancelSelection,
        initSelectedElements,
      }}
    >
      {children}
    </SelectedElementsContext.Provider>
  );
};

export default SelectedElementsProvider;
