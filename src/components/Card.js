function Card({ card, onCardClick, onDeleteCard }) {
  //const { key, image, title, likes } = card;
  // console.log(image, title, likes);
  console.log(card);
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element-template">
      <div className="element">
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <div className="element__capture">
          <h2 className="element__text">{card.name}</h2>
          <div className="element__like-container">
            <button className="element__heart" type="button"></button>
            <p className="element__likes-amount">{card.likes.length}</p>
          </div>
        </div>
        <button
          className="element__recyclebin"
          type="button"
          onClick={onDeleteCard}
        ></button>
      </div>
    </div>
  );
}
export default Card;
