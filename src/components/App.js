import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";
import { useState } from "react";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = useState(false);
  console.log(selectedCard);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function handleDeleteCardClick() {
    setDeleteCardPopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setDeleteCardPopupOpen(false);
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onDeleteCard={handleDeleteCardClick}
      />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonName="Сохранить"
      >
        <>
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_name"
              type="text"
              id="nameInput"
              name="nameInput"
              placeholder="Имя"
              minLength="3"
              maxLength="40"
              pattern="^[a-zA-ZА-Яа-яЁё\s\-]+$"
              required
            />
            <span className="nameInput-error popup__input-error"></span>
          </label>
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_job"
              type="text"
              id="jobInput"
              name="jobInput"
              placeholder="Деятельность"
              minLength="2"
              maxLength="200"
              pattern="^[a-zA-ZА-Яа-яЁё\s\-]+$"
              required
            />
            <span className="jobInput-error popup__input-error"></span>
          </label>
        </>
      </PopupWithForm>
      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonName="Сохранить"
      >
        <>
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_name"
              type="text"
              id="nameInput"
              name="nameInput"
              placeholder="Имя"
              minLength="3"
              maxLength="40"
              pattern="^[a-zA-ZА-Яа-яЁё\s\-]+$"
              required
            />
            <span className="nameInput-error popup__input-error"></span>
          </label>
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_job"
              type="text"
              id="jobInput"
              name="jobInput"
              placeholder="Деятельность"
              minLength="2"
              maxLength="200"
              pattern="^[a-zA-ZА-Яа-яЁё\s\-]+$"
              required
            />
            <span className="jobInput-error popup__input-error"></span>
          </label>
        </>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonName="Сохранить"
      >
        <>
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_link"
              type="url"
              name="avatar"
              id="avatarlink"
              placeholder="Ссылка на аватар"
              required
            />
            <span className="avatarlink-error popup__input-error"></span>
          </label>
        </>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}
        buttonName="Да"
      >
        <></>
      </PopupWithForm>

      <Footer />
    </div>
  );
}

export default App;
