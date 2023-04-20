import React from 'react';
import closeButton from '../images/close.png';
import useForm from '../hooks/UseForm';

function PopupWithForm({ formType, className, children, title, buttonText, popupIsOpen, handleModalOnKeyDown, handleCloseModal, setterInApi, currentCard }) {
  const { form, send, setSend } = useForm();
  const formSubmit = async (e) => {
    e.preventDefault();
    formType === 'delete' ? await setterInApi(currentCard) : await setterInApi(form.current.elements);
    setSend(!send);
    handleCloseModal();
  }

  return (
    <>
      <div className={className} id='add__modal' tabIndex={0} onKeyDown={handleModalOnKeyDown}>
        <button className='button popup__close' id='add__close' onClick={handleCloseModal} >
          <img className='popup__icon' alt='close' src={closeButton} />
        </button>
        <form className='form modal' ref={form}>
          <h2 className='title modal__title'>{title}</h2>
          {children}
          <button
            type='submit'
            className='button modal__button'
            id='add__button'
            onClick={formSubmit}
          >
            <span className='button__text'>{buttonText}</span>
          </button>
        </form>
      </div>
      <div className={`${popupIsOpen ? 'fade' : 'fade fade_closed'}`} onClick={handleCloseModal} />
    </>
  );
}

export default PopupWithForm;
