import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ className, addIsOpen, setAddIsOpen, handleAddPlaceClick, handleSetCards }) {
  const handleCloseModal = () => handleAddPlaceClick();
  const handleModalOnKeyDown = e => e.key === 'Escape' ? setAddIsOpen(false) : null;

  return (
    <PopupWithForm
      formType={'addCard'}
      className={className}
      children={
        <>
          <div>
            <input name='formTitle' className='form__input form__input_add form__title' id='title' type='text'
              placeholder='Ti&#769;tulo' />
            <label htmlFor='title' className='form__description form__description_error'></label>
          </div>
          <div>
            <input name='formLink' className='form__input form__input_add form__link' id='link' type='text'
              placeholder='Link de imagem' />
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
    />
  );
}

export default AddPlacePopup;