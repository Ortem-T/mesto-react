import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState(`Жак Иф Кусто`);
  const [userDescription, setUserDescription] = React.useState(`Исследователь океанов`);
  const [userAvatar, setUserAvatar] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div>
        <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__data">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__about-me">{userDescription}</p>
          </div>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>Редактировать</button>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}>Добавить фото</button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => 
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              card={card}
              onCardClick={props.onCardClick}
            />
          )}
        </ul>
      </section>
    </main>
  )
}

export default Main;