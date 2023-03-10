function Main(props) {
  // const buttonEdit = document.querySelector(".profile__edit-button");
  // const buttonAdd = document.querySelector(".profile__add-button");
  // const popupEdit = document.querySelector(".popup_type_edit");
  // const popupAdd = document.querySelector(".popup_type_add");
  // function handleEditProfileClick(popup) {
  //   popup.classList.add("popup_opened");
  // }
  // function handleClose(popup) {
  //   popup.classList.remove("popup_opened");
  // }

  // buttonEdit.addEventListener("click", () => {
  //   handleEditProfileClick(popupEdit);
  // });
  // buttonAdd.addEventListener("click", () => {
  //   handleEditProfileClick(popupAdd);
  // });
  // popupEdit.addEventListener("click", (evt) => {
  //   if (evt.target.classList.contains("popup__close")) {
  //     handleClose(popupEdit);
  //   }
  // });
  // popupAdd.addEventListener("click", (evt) => {
  //   if (evt.target.classList.contains("popup__close")) {
  //     handleClose(popupAdd);
  //   }
  // });
  // const onEditProfile = props.onEditProfile;
  const { onEditProfile, onAddPlace, onEditAvatar } = props;
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__box">
          <button
            className="profile__avatar-edit-button"
            type="button"
            onClick={onEditAvatar}
          >
            <img
              className="profile__avatar"
              alt="Барби"
              src="https://w7.pngwing.com/pngs/381/319/png-transparent-teresa-barbie-fashion-doll-barbie-face-fashion-doll.png"
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__header">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button opacity"
              type="button"
              aria-label="Редактировать"
              onClick={onEditProfile}
            ></button>
            <p className="profile__text">Исследователь океана</p>
          </div>
        </div>
        <button
          className="profile__add-button opacity"
          type="button"
          onClick={onAddPlace}
          aria-label="Добавить карточку"
        ></button>
      </section>
      <section className="elements"></section>

      <div class="popup popup_type_add">
        <div class="popup__container">
          <button class="popup__close opacity" type="button"></button>
          <h2 class="popup__header">Новое место</h2>
          <form class="popup__form" name="form" method="get">
            <fieldset class="popup__fieldset" id="fieldsetPlacename">
              <label class="popup__label">
                <input
                  class="popup__input popup__input_type_place"
                  type="text"
                  id="placeInput"
                  name="name"
                  placeholder="Название"
                  minlength="2"
                  maxlength="30"
                  pattern="^[a-zA-ZА-Яа-яЁё\.\'\-\s]+$"
                  required
                />
                <span class="placeInput-error popup__input-error"></span>
              </label>
              <label class="popup__label">
                <input
                  class="popup__input popup__input_type_link"
                  type="url"
                  id="linkInput"
                  name="link"
                  placeholder="Ссылка на картинку"
                  required
                />
                <span class="linkInput-error popup__input-error"></span>
              </label>
            </fieldset>
            <button class="popup__submit" type="submit" aria-label="Сохранить">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
export default Main;
