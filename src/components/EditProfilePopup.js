import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ className, editIsOpen, setEditIsOpen, setCurrentUser, handleCurrentUser, editingProfile }) {
  const handleCloseModal = () => setEditIsOpen(!editIsOpen);
  const handleModalOnKeyDown = e => e.key === 'Escape' ? setEditIsOpen(false) : null;

  return (
    <PopupWithForm
      className={className}
      children={
        <>
          <div>
            <input className='form__input form__name' name='formName' id='name' type='text' minLength={2} maxLength={40} required placeholder='' />
            <label htmlFor='name' className='form__description form__description_error'></label>
          </div>
          <div>
            <input className='form__input form__status' name='formDescription' id='status' type='text' minLength={2} maxLength={200} required placeholder='' />
            <label htmlFor='status' className='form__description form__description_error'></label>
          </div>
        </>
      }
      title={'Editar Perfil'}
      buttonText={'Salvar'}
      popupIsOpen={editIsOpen}
      handleCloseModal={handleCloseModal}
      handleModalOnKeyDown={handleModalOnKeyDown}
      setCurrentUser={setCurrentUser}
      handleCurrentUser={handleCurrentUser}
      setterInApi={editingProfile}
    />
  );
}

export default EditProfilePopup;
