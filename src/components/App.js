import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
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
              minlength="3"
              maxlength="40"
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
              minlength="2"
              maxlength="200"
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
              minlength="3"
              maxlength="40"
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
              minlength="2"
              maxlength="200"
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
          <label class="popup__label">
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
      {/* 
      <div className="popup popup_theme_dark">
        <figure className="popup__figure">
          <button className="popup__close opacity" type="button"></button>
          <img className="popup__image" src="#" alt="#" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button className="popup__close opacity" type="button"></button>
          <h2 className="popup__header">Обновить аватар</h2>
          <form className="popup__form" name="form" method="get">
            <fieldset className="popup__fieldset" id="fieldsetAvatar">
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
            </fieldset>
            <button
              className="popup__submit"
              type="submit"
              aria-label="Сохранить"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <button className="popup__close opacity" type="button"></button>
          <h2 className="popup__header">Вы уверены?</h2>
          <form className="popup__form" name="form" method="get">
            <button
              className="popup__submit popup__submit_valid"
              type="button"
              aria-label="Сохранить"
            >
              Да
            </button>
          </form>
        </div>
      </div> */}
      <template className="element-template" id="element">
        <div className="element">
          <img className="element__image" />
          <div className="element__capture">
            <h2 className="element__text"></h2>
            <div className="element__like-container">
              <button className="element__heart" type="button"></button>
              <p className="element__likes-amount">0</p>
            </div>
          </div>
          <button className="element__recyclebin" type="button"></button>
        </div>
      </template>
    </div>
  );
}

export default App;
