import Header from './Header'
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <body className="body">
      <Header/>
      <Main/>
      <Footer/>

      <div className="popup popup_type_profile">
        <div className="popup__container">
          <button className="popup__close" type="button">Закрыть</button>
          <form className="popup__form form" method="post" name="profile-edit" id="form-profile" novalidate>
            <h2 className="form__title">Редактировать профиль</h2>
            <div className="form__field">
              <input className="form__input form__input_type_name" type="text" placeholder="Имя" name="name" id="profile-name" minlength="2" maxlength="40" required />
              <span id="profile-name-error" className="error"></span>
            </div>
            <div className="form__field">
              <input className="form__input form__input_type_about-me" type="text" placeholder="О себе" name="aboutme" id="profile-about-me" minlength="2" maxlength="200" required />
              <span id="profile-about-me-error" className="error"></span>
            </div>
            <button className="form__save" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button className="popup__close" type="button">Закрыть</button>
          <form className="popup__form form" method="post" name="avatar" id="form-avatar" novalidate>
            <h2 className="form__title">Обновить аватар</h2>
            <div className="form__field">
              <input className="form__input form__input_type_avatar" type="url" placeholder="Ссылка на картинку" name="avatarUrl" id="avatar" minlength="2" maxlength="200" required />
              <span id="avatar-error" className="error"></span>
            </div>
            <button className="form__save" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_img">
        <div className="popup__container">
          <button className="popup__close" type="button">Закрыть</button>
          <form className="popup__form form" method="post" name="add-card" id="form-card" novalidate>
            <h2 className="form__title">Новое место</h2>
            <div className="form__field">
              <input className="form__input form__input_type_title-img" type="text" placeholder="Название" name="cardTitleImg" id="card-title-img" minlength="2" maxlength="30" required />
              <span id="card-title-img-error" className="error"></span>
            </div>
            <div className="form__field">
              <input className="form__input form__input_type_img" type="url" placeholder="Ссылка на картинку" name="cardImg" id="card-img" required />
              <span id="card-img-error" className="error"></span>
            </div>
            <button className="form__save" type="submit">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_del">
        <div className="popup__container">
          <button className="popup__close" type="button">Закрыть</button>
          <form className="popup__form form" method="post" name="del" id="form-del" novalidate>
            <h2 className="form__title">Вы уверены?</h2>
            <button className="form__save" type="submit">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_img-open">
        <div className="popup__container">
          <button className="popup__close" type="button">Закрыть</button>
          <img className="popup__photo" alt="" src="<%=require('./images/logo.svg')%>" />
          <h2 className="popup__photo-caption"></h2>
        </div>
      </div>

      <template className="elements__template" id="item-template">
        <li className="elements__item">
          <button className="elements__del-button" type="button">Удалить</button>
          <img className="elements__photo" src="<%=require('./images/logo.svg')%>" alt="" />
          <div className="elements__text">
            <h2 className="elements__title"></h2>
            <div className="elements__like">
              <button className="elements__like-button" type="button"></button>
              <span className="elements__like-counter"></span>
            </div>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
