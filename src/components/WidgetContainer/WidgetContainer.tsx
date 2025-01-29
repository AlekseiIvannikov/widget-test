import './WidgetContainer.css';

import { useState } from 'react';

import { useSelectedElements } from '../../context/SelectedElementsContext.ts';
import ElementsChoice from '../ElementsChoice/ElementsChoice.tsx';
import SelectedElementList from '../SelectedBadgeList/SelectedBadgeList.tsx';
import Button from '../UI/Button/Button.tsx';
import Modal from '../UI/Modal/Modal.tsx';

const WidgetContainer = () => {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const { selectedElements, cancelSelection, confirmSelection, removeSelectedElement } =
    useSelectedElements();

  const toggleModal = () => {
    setModalIsOpened(!modalIsOpened);
  };

  const cancelChanges = () => {
    cancelSelection();
    setModalIsOpened(false);
  };

  const confirmChanges = () => {
    confirmSelection();
    setModalIsOpened(false);
  };

  const selectedItems = Array.from(selectedElements.entries())
    .filter(([_, isSelected]) => isSelected)
    .map(([element]) => element);

  return (
    <div className="widget-container">
      <h2 className="widget-container__title">Select items</h2>
      <p className="widget-container__description">
        You currently have {selectedItems.length} selected items.
      </p>

      <SelectedElementList list={selectedItems} onRemove={removeSelectedElement} />

      <Button type="success" onClick={toggleModal}>
        Change my choice
      </Button>

      <Modal
        isOpen={modalIsOpened}
        title="Select items"
        onConfirm={confirmChanges}
        onClose={cancelChanges}
      >
        <ElementsChoice />
      </Modal>
    </div>
  );
};

export default WidgetContainer;
