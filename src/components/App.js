import React from 'react';
import logo from './images/logo.svg';

function App() {
  return (
    <div className='page'>
      <section className="header">
        <img className="header__logo" src={logo} alt="Логотип"/>
      </section>

      <section className="profile">
        <div className="profile__avatar"></div>
        <h1 className="profile__name"></h1>
        <button className="profile__edit-button" type="button" aria-label="Изменить"></button>
        <p className="profile__activity"></p>
        <button type="button" className="profile__add-button" aria-label="Добавить"></button>
      </section>

      <section className="elements">
        <ul className="elements__container"></ul>
      </section>

      <footer className="footer">
        <p className="footer__copyright">© 2020 Mesto Russia</p>
      </footer>

      <div className="popup popup_type_edit">
        <div className="popup__container">
          
          <button
          className="popup__close popup__close_type_edit"
          type="button"
          aria-label="Закрыть"></button>

          <h2 className="popup__title">Редактировать профиль</h2>
          
          <form className="form form_type_edit" name="popup-editor" noValidate/>
            
          <input 
          className="form__input form__input_value_name"
          type="text"
          name="input-name"
          id="name-input"
          required
          minlength="2"
          maxlength="40"
          />
          <span 
          className="form__input-error form__input-error_position_top"
          id="name-input-error"></span>
          
          <input
          className="form__input form__input_value_activity"  
          type="text"
          name="input-activity"
          id="activity-input"
          required
          minlength="2"
          maxlength="200"
          />
          <span 
          className="form__input-error form__input-error_position_button"
          id="activity-input-error"></span>
          <button className="form__button" 
          type="submit" 
          name="save-button">Сохранить</button>
          
        </div>
      </div>

      <div className="popup popup_type_add">
        <div className="popup__container">
          
          <button
          className="popup__close popup__close_type_add"
          type="button"
          aria-label="Закрыть"></button>

          <h2 className="popup__title">Новое место</h2>
          
          <form className="form form_type_add" name="add-popup-editor" noValidate/>
            <input
            className="form__input form__input_value_place"
            type="text"
            id="place-input"
            required
            minlength="2"
            maxlength="30"
            name="place"
            placeholder="Название"
            />
            <span 
            className="form__input-error form__input-error_position_top"
            id="place-input-error"></span>

            <input
            className="form__input form__input_value_link"
            type="url"
            required
            id="link-input"
            name="link"
            placeholder="Ссылка на картинку"
            />
            <span 
            className="form__input-error form__input-error_position_button"
            id="link-input-error"></span>

            <button
            className="form__button"
            type="submit"
            name="save-button">Создать</button>

        </div>
      </div>

      <div className="popup popup_type_photo">
        <div className="popup__container-photo">
          
          <button
          className="popup__close popup__close_type_image"
          type="button"
          aria-label="Закрыть"></button>
          
          <img className="popup__photo-element" src="#" alt="картинка"/>
          <h3 className="popup__title-photo"></h3>
        </div>
      </div>

      <div className="popup popup_type_confirmation">
        <div className="popup__container">
          <button className="popup__close popup__close_type_confirmation"
          type="button"
          aria-label="Закрыть"></button>
          <h2 className="popup__title-confirmation">Вы уверены?</h2>
          <form className="form form_type_confirmation" name="confirmation-form">
            <button className="form__button"
            type="submit"
            name="confirmation-button">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button className="popup__close popup__close_type_avatar"
          type="button"
          aria-label="Закрыть"></button>
          <h2 className="popup__title">Обновить аватар</h2>

          <form className="form form_type_avatar" name="avatar-form">
            <input
            className="form__input form__input_value_link"
            type="url"
            required
            id="link-avatar"
            name="link"
            placeholder="Ссылка на фотографию"
            />
            <span 
            className="form__input-error form__input-error_position_top"
            id="link-avatar-error"></span>
            <button className="form__button"
            type="submit"
            name="avatar-button">Сохранить</button>
          </form>
        </div>
      </div>

      <template className="templateCard">
        <li className="element">
          
          <button
          className="element__delete"
          type="button"
          aria-label="Удалить фото"></button>

          <img src="#" className="element__image" alt="картинка"/>
          <div className="element__content">
            <h2 className="element__title"></h2>
            
            <div className="element__like-content">
              <button
              className="element__like"
              type="button"
              aria-label="Лайк"></button>
              <p className="element__like-quantity"></p>
            </div>
            
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
