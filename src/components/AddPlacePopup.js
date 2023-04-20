import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ className, addIsOpen, setAddIsOpen, handleAddPlaceClick, handleSetCards, addingCard }) {
  const handleCloseModal = () => handleAddPlaceClick();
  const handleModalOnKeyDown = e => e.key === 'Escape' ? setAddIsOpen(false) : null;

  return (
    <PopupWithForm
      className={className}
      children={
        <>
          <div>
            <input name='formTitle' className='form__input form__input_add form__title' id='title' min={2} max={30} type='text'
              placeholder='Ti&#769;tulo' required />
            <label htmlFor='title' className='form__description form__description_error'></label>
          </div>
          <div>
            <input name='formLink' className='form__input form__input_add form__link' id='link' type='text'
              placeholder='Link de imagem' required />
            <label htmlFor='link' className='form__description form__description_error'></label>
          </div>
        </>
      }
      title={'Novo local'}
      buttonText={'Criar'}
      popupIsOpen={addIsOpen}
      handleModalOnKeyDown={handleModalOnKeyDown}
      handleCloseModal={handleCloseModal}
      handleSetCards={handleSetCards}
      setterInApi={addingCard}
    />
  );
}

export default AddPlacePopup;