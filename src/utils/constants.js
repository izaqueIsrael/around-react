// Images
import buttonAddIcon from '../images/add.png';
import closeIcon from '../images/close.png';
import buttonEditIcon from '../images/edit.png';
import profileImage from '../images/Garithos_portrait.webp';
import likeButton from '../images/like.svg';
import logo from '../images/logo.svg';
import trashIcon from '../images/trash.svg';
import likeButtonActived from '../images/union.png';
import pen from '../images/pen.svg'
import Api from './api.js';

export { buttonAddIcon, closeIcon, buttonEditIcon, profileImage, likeButton, logo, trashIcon, likeButtonActived, pen };

// FormValidator

export const formElementsToBeValidated = {
  formName: { selector: 'form__name', range: 40 },
  formStatus: { selector: 'form__status', range: 200 },
  formTitle: { selector: 'form__title', range: 30 },
  formLink: { selector: 'form__link' },
  formAvatar: { selector: 'form__avatar' },
  inputWithZeroCharacteresLenght: 0,
  inputWithOneCharacter: 1,
  inputEqualToOrGreaterThanTwoCharacteres: 2
};

// API
export const apiUser = new Api({ token: 'fd9c323e-e9d0-40a3-963c-a9bd242da440', link: 'https://around.nomoreparties.co/v1/web_ptbr_cohort_02' });
