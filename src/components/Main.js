import { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";
function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onDeleteCard,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  useEffect(() => {
    Promise.all([api.getData("/users/me"), api.getData("/cards")])

      .then(([userData, cardData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards([...cardData]);
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
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onDeleteCard={onDeleteCard}
          />
        ))}
      </section>
    </main>
  );
}
export default Main;
