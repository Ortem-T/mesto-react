function Main() {
    return(
        <main className="content">
        <section className="profile">
          <img className="profile__avatar" src="<%=require('./images/avatar.jpg')%>" alt="Аватар пользователя" />
          <button className="profile__avatar-button" onClick={handleEditAvatarClick}></button>
          <div className="profile__info">
            <div className="profile__data">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <p className="profile__about-me">Исследователь океана</p>
            </div>
            <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}>Редактировать</button>
          </div>
          <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}>Добавить фото</button>
        </section>
        <section className="elements">
          <ul className="elements__list">

          </ul>
        </section>
      </main>
    )
}


function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
}

function handleAddPlaceClick() {
    document.querySelector('.popup_type_img').classList.add('popup_opened');
}

export default Main;