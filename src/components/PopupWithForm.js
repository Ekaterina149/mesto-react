function PopupWithForm({ isOpen, name, onClose, buttonName, children, title }) {
  return (
    <div
      className={
        isOpen
          ? `popup popup_opened popup_type_${name}`
          : `popup popup_type_${name}`
      }
    >
      <div className="popup__container">
        <button
          className="popup__close opacity"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__header">{title}</h2>
        <form className="popup__form" name={name} method="get">
          <fieldset className="popup__fieldset" id="fieldsetname">
            {children}
          </fieldset>
          <button
            className="popup__submit"
            type="submit"
            aria-label={"Сохранить"}
          >
            {buttonName || "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
