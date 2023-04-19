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
import Footer from './Footer';

function App() {
  // Current User
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([]);
  const handleCurrentUser = (user) => setCurrentUser(user);
  const handleSetCards = (cards) => setCards(cards);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getUserCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch(err => err)
  }, []);

  // Edit Profile Modal Functions
  const [editIsOpen, setEditIsOpen] = useState(false);
  const handleEditProfileClick = () => setEditIsOpen(!editIsOpen);

  // Add Post Modal Functions
  const [addIsOpen, setAddIsOpen] = useState(false);
  const handleAddPlaceClick = () => setAddIsOpen(!addIsOpen);

  // Change Avatar Modal Functions
  const [avatarModalIsOpen, setAvatarModalIsOpen] = useState(false);
  const handleEditAvatarClick = () => setAvatarModalIsOpen(!avatarModalIsOpen);

  // Delete Post Modal
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const handleDeleteCardClick = () => setDeleteIsOpen(!deleteIsOpen);

  const [currentCard, setCurrentCard] = useState();
  const handleDeleteCard = (card) => setCurrentCard(card)

  // Image Modal
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);
  const handleCardClick = (cardImage, cardText) => {
    setImageModalIsOpen(!imageModalIsOpen);
    setSelectedCard({ link: cardImage.current.src, text: cardText.current.textContent });
  }

  // Card
  const [selectedCard, setSelectedCard] = useState({ text: '', link: '' });

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
        api={api}
        handleDeleteCard={handleDeleteCard}
        handleSetCards={handleSetCards}
      />
      <EditProfilePopup
        className={`${editIsOpen ? 'popup popup-image' : 'popup popup_closed popup-image'}`}
        editIsOpen={editIsOpen}
        setEditIsOpen={setEditIsOpen}
        handleCurrentUser={handleCurrentUser}
      />
      <AddPlacePopup
        className={`${addIsOpen ? 'popup popup-image' : 'popup popup_closed popup-image'}`}
        addIsOpen={addIsOpen}
        setAddIsOpen={setAddIsOpen}
        handleAddPlaceClick={handleAddPlaceClick}
        handleSetCards={handleSetCards}
      />
      <EditAvatarPopup
        className={`${avatarModalIsOpen ? 'popup popup-image' : 'popup popup_closed popup-image'}`}
        avatarModalIsOpen={avatarModalIsOpen}
        onEditAvatarClick={setAvatarModalIsOpen}
        handleEditAvatarClick={handleEditAvatarClick}
        handleCurrentUser={handleCurrentUser}
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
      />
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;