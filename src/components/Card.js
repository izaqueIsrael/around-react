import React, { useState, useContext, useEffect } from 'react';
import trashIcon from '../images/trash.svg'
import useCard from '../hooks/UseCard';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { apiUser } from '../utils/constants';

function Card({ card, image, title, likes, handleCardClick, handleDeleteCardClick, owner, like, setCards, handleDeleteCard, handleSetCards }) {
  const currentUser = useContext(CurrentUserContext);
  const [isLiked, setIsLiked] = useState(like.some(i => i._id === currentUser._id));
  const { cardImage, cardText, deleteButton, likeButton } = useCard();

  const handleClick = () => handleCardClick(cardImage, cardText);
  const checkOwner = () => (owner._id !== currentUser._id && deleteButton.current) && deleteButton.current.remove();
  const handleCardLike = () => isLiked ? isDisliking() : isLiking();

  const isLiking = async () => {
    setIsLiked(true);
    await apiUser.addLike(card._id);
  };

  const isDisliking = async () => {
    setIsLiked(false);
    await apiUser.removeLike(card._id);
  };

  useEffect(() => {
    apiUser.getUserCards().then(userCards => handleSetCards(userCards));
  }, [isLiked]);

  const handleDelete = () => (handleDeleteCardClick(), handleDeleteCard(card._id))
  return (
    <div className='post'>
      {checkOwner()}
      <img className='post__image' alt={title} src={image} ref={cardImage} onClick={handleClick} />
      <button ref={deleteButton} className='button post__delete'><img className='post__delete__image' alt='delete post' src={trashIcon} onClick={handleDelete} /></button>
      <div className='post__container'>
        <h2 className='title post__title' ref={cardText}>{title}</h2>
        <div className='info'>
          <button className={isLiked ? 'button post__button button__image post__button_active' : 'button post__button button__image'} ref={likeButton} onClick={handleCardLike}></button>
          <p className='like'>{likes}</p>
        </div>
      </div>
    </div >
  );
}

export default Card;
