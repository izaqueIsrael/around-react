import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import DeletePostModal from './DeletePostModal';
import ImagePopup from './ImagePopup';
import api from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import useApp from '../hooks/UseApp';
import Footer from './Footer';

function App() {
  // Current User
  const handleCurrentUser = (user) => setCurrentUser(user);
  const handleSetCards = (cards) => setCards(cards);
  const { update, setUpdate, currentUser, setCurrentUser, cards, setCards, currentCard, setCurrentCard, editIsOpen, setEditIsOpen, addIsOpen, setAddIsOpen, avatarModalIsOpen, setAvatarModalIsOpen, deleteIsOpen, setDeleteIsOpen, imageModalIsOpen, setImageModalIsOpen } = useApp();

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getUserCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch(err => err)
  }, [update]);

  // Edit Profile Modal Functions
  const handleEditProfileClick = () => setEditIsOpen(!editIsOpen);

  const editingProfile = async (newProfile) => {
    await api.setUserInfo({ newName: newProfile.name.value, newAbout: newProfile.status.value });
    setUpdate(!update);
  }

  // Add Post Modal Functions
  const handleAddPlaceClick = () => setAddIsOpen(!addIsOpen);

  const addingCard = async (newCard) => {
    await api.updateCard({ newName: newCard.title.value, newLink: newCard.link.value });
    setUpdate(!update);
  }

  // Change Avatar Modal Functions
  const handleEditAvatarClick = () => setAvatarModalIsOpen(!avatarModalIsOpen);

  const changingAvatar = async (newAvatar) => {
    await api.setUserAvatar(newAvatar.avatar.value);
    setUpdate(!update);
  }

  // Delete Post Modal
  const handleDeleteCardClick = () => setDeleteIsOpen(!deleteIsOpen);
  const handleDeleteCard = (card) => setCurrentCard(card);

  const deletingCard = async (card) => {
    await api.deleteCard(card);
    setUpdate(!update);
  }

  // Image Modal
  const handleCardClick = (cardImage, cardText) => {
    setImageModalIsOpen(!imageModalIsOpen);
    setSelectedCard({ link: cardImage.current.src, text: cardText.current.textContent });
  }

  // Card
  const [selectedCard, setSelectedCard] = useState({ text: '', link: '' });

  const liking = async (like) => {
    await api.addLike(like);
    setUpdate(!update);
  }

  const disliking = async (dislike) => {
    await api.removeLike(dislike);
    setUpdate(!update);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        handleCardClick={handleCardClick}
        handleDeleteCardClick={handleDeleteCardClick}
        cards={cards}
        handleDeleteCard={handleDeleteCard}
        handleSetCards={handleSetCards}
        liking={liking}
        disliking={disliking}
      />
      <EditProfilePopup
        className={`${editIsOpen ? 'popup popup-image' : 'popup popup_closed popup-image'}`}
        editIsOpen={editIsOpen}
        setEditIsOpen={setEditIsOpen}
        handleCurrentUser={handleCurrentUser}
        editingProfile={editingProfile}
      />
      <AddPlacePopup
        className={`${addIsOpen ? 'popup popup-image' : 'popup popup_closed popup-image'}`}
        addIsOpen={addIsOpen}
        setAddIsOpen={setAddIsOpen}
        handleAddPlaceClick={handleAddPlaceClick}
        handleSetCards={handleSetCards}
        addingCard={addingCard}
      />
      <EditAvatarPopup
        className={`${avatarModalIsOpen ? 'popup popup-image' : 'popup popup_closed popup-image'}`}
        avatarModalIsOpen={avatarModalIsOpen}
        onEditAvatarClick={setAvatarModalIsOpen}
        handleEditAvatarClick={handleEditAvatarClick}
        handleCurrentUser={handleCurrentUser}
        changingAvatar={changingAvatar}
      />
      <ImagePopup
        className={`${imageModalIsOpen ? 'popup popup-image' : 'popup popup_closed popup-image'}`}
        imageModalIsOpen={imageModalIsOpen}
        setImageModalIsOpen={setImageModalIsOpen}
        handleCardClick={handleCardClick}
        selectedCard={selectedCard}
      />
      <DeletePostModal
        className={`${deleteIsOpen ? 'popup popup-image popup_delete' : 'popup popup_closed popup-image popup_delete'}`}
        deleteIsOpen={deleteIsOpen}
        setDeleteIsOpen={setDeleteIsOpen}
        currentCard={currentCard}
        handleSetCards={handleSetCards}
        handleDeleteCardClick={handleDeleteCardClick}
        deletingCard={deletingCard}
      />
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;