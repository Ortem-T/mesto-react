import React from 'react';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard(null)
  }

  return (
    <div className="body">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText='Сохранить'
      >
        <div className="form__field">
          <input className="form__input form__input_type_avatar" type="url" placeholder="Ссылка на картинку" name="avatarUrl" id="avatar" minLength="2" maxLength="200" required />
          <span id="avatar-error" className="error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText='Сохранить'
      >
        <div className="form__field">
          <input className="form__input form__input_type_name" type="text" placeholder="Имя" name="name" id="profile-name" minLength="2" maxLength="40" required/>
          <span id="profile-name-error" className="error"></span>
        </div>
        <div className="form__field">
          <input className="form__input form__input_type_about-me" type="text" placeholder="О себе"  name="aboutme" id="profile-about-me" minLength="2" maxLength="200" required/>
          <span id="profile-about-me-error" className="error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText='Создать'
      >
        <div className="form__field">
          <input className="form__input form__input_type_title-img" type="text" placeholder="Название" name="cardTitleImg" id="card-title-img" minLength="2" maxLength="30" required/>
          <span id="card-title-img-error" className="error"></span>
        </div>
        <div className="form__field">
          <input className="form__input form__input_type_img" type="url" placeholder="Ссылка на картинку"  name="cardImg" id="card-img" required/>
          <span id="card-img-error" className="error"></span>
        </div>
      </PopupWithForm>  

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
