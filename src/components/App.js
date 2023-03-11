import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

import { useState } from "react";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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

      <Footer />
    </div>
  );
}

export default App;
