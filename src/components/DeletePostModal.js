import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeletePostModal({ className, deleteIsOpen, setDeleteIsOpen, currentCard, apiUser, handleSetCards, handleDeleteCardClick }) {
  const handleCloseModal = () => handleDeleteCardClick();
  const handleModalOnKeyDown = e => e.key === 'Escape' ? setDeleteIsOpen(false) : null;

  return (
    <PopupWithForm
      formType={'delete'}
      className={className}
      children={null}
      title={'Tem certeza?'}
      buttonText={'Sim'}
      popupIsOpen={deleteIsOpen}
      handleCloseModal={handleCloseModal}
      handleModalOnKeyDown={handleModalOnKeyDown}
      currentCard={currentCard}
      handleSetCards={handleSetCards}
    />
  );
}

export default DeletePostModal;