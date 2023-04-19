import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ className, editIsOpen, setEditIsOpen, setCurrentUser, handleCurrentUser }) {
  const handleCloseModal = () => setEditIsOpen(!editIsOpen);
  const handleModalOnKeyDown = e => e.key === 'Escape' ? setEditIsOpen(false) : null;

  return (
    <PopupWithForm
      formType={'profile'}
      className={className}
      children={
        <>
          <div>
            <input className='form__input form__name' name='formName' id='name' type='text' placeholder='' />
            <label htmlFor='name' className='form__description form__description_error'></label>
          </div>
          <div>
            <input className='form__input form__status' name='formDescription' id='status' type='text' placeholder='' />
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
    />
  );
}

export default EditProfilePopup;
