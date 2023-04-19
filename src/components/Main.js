import React, { useContext } from 'react';
import editButton from '../images/edit.png';
import addButton from '../images/add.png';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick, handleCardClick, handleDeleteCardClick, cards, apiUser, setCards, handleDeleteCard, handleSetCards }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <main className='main'>
        <section className='profile'>
          <div className='profile__container'>
            <div className='profile__pictures'>
              <img className='profile__image' src={currentUser.avatar} onClick={onEditAvatarClick} alt={currentUser.name} />
              <div className='cover' />
            </div>
            <div className='profile__titles'>
              <div className='profile__content'>
                <h1 className='title profile__title' >{currentUser.name}</h1>
                <button className='button profile__button'>
                  <img className='edit' alt='edit' src={editButton} onClick={onEditProfileClick} />
                </button>
              </div>
              <h2 className='subtitle profile__subtitle'>{currentUser.about}</h2>
            </div>
          </div>
          <button className='button' id='button__add' onClick={onAddPlaceClick}>
            <img className='add' alt='add' src={addButton} />
          </button>
        </section>
        <section className='posts' >
          {Array.isArray(cards) && cards.map((card) => (<Card
            card={card}
            key={card._id}
            image={card.link}
            likes={card.likes.length}
            title={card.name}
            handleCardClick={handleCardClick}
            handleDeleteCardClick={handleDeleteCardClick}
            owner={card.owner}
            like={card.likes}
            apiUser={apiUser}
            setCards={setCards}
            handleDeleteCard={handleDeleteCard}
            handleSetCards={handleSetCards}
          />))}
        </section>
      </main>
    </>
  )
}

export default Main;