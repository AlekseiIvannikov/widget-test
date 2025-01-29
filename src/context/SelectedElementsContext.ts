import { createContext, useContext } from 'react';

interface SelectedElementsContextType {
  selectedElements: Map<number, boolean>;
  tempSelection: Map<number, boolean>;
  toggleElement: (element: number) => void;
  removeSelectedElement: (element: number) => void;
  confirmSelection: () => void;
  cancelSelection: () => void;
  initSelectedElements: () => void;
}

const SelectedElementsContext = createContext<SelectedElementsContextType>({
  selectedElements: new Map(),
  tempSelection: new Map(),
  toggleElement: () => {},
  removeSelectedElement: () => {},
  confirmSelection: () => {},
  cancelSelection: () => {},
  initSelectedElements: () => {},
});

export const useSelectedElements = () => useContext(SelectedElementsContext);

export default SelectedElementsContext;
