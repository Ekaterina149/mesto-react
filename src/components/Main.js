import { useEffect, useState } from "react";
import { api } from "./utils/Api";
import Card from "./Card";
function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  // console.log(cards);
  // cards.forEach((element) => {
  //   console.log(element.link);
  // });

  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;
  useEffect(() => {
    Promise.all([api.getData("/users/me"), api.getData("/cards")])

      .then((data) => {
        setUserName(data[0].name);
        setUserDescription(data[0].about);
        setUserAvatar(data[0].avatar);
        setCards([...data[1]]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              alt={userDescription}
              src={userAvatar}
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__header">{userName}</h1>
            <button
              className="profile__edit-button opacity"
              type="button"
              aria-label="Редактировать"
              onClick={onEditProfile}
            ></button>
            <p className="profile__text">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button opacity"
          type="button"
          onClick={onAddPlace}
          aria-label="Добавить карточку"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}
export default Main;
