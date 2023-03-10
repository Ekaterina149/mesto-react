function PopupWithForm(props) {
  console.log(props);
  const { isOpen, name, onClose } = props;
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
        <h2 className="popup__header">{props.title}</h2>
        <form className="popup__form" name={props.name} method="get">
          <fieldset className="popup__fieldset" id="fieldsetname">
            {props.children}
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
  );
}
export default PopupWithForm;
