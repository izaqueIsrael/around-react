import { useState } from 'react';

function useApp() {
  const [update, setUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState({})
  const [currentCard, setCurrentCard] = useState();
  const [cards, setCards] = useState([]);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [addIsOpen, setAddIsOpen] = useState(false);
  const [avatarModalIsOpen, setAvatarModalIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);

  return { update, setUpdate, currentUser, setCurrentUser, cards, setCards, currentCard, setCurrentCard, editIsOpen, setEditIsOpen, addIsOpen, setAddIsOpen, avatarModalIsOpen, setAvatarModalIsOpen, deleteIsOpen, setDeleteIsOpen, imageModalIsOpen, setImageModalIsOpen }
}

export default useApp;