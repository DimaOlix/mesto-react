import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

  const[userName, setUserName] = React.useState();
  const[userDescription, setUserDescription] = React.useState();
  const[userAvatar, setUserAvatar] = React.useState();
  const[cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Api.getUserInfo()
    .then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch((err) => console.log(err))

    Api.getCardsInfo()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => console.log(err))

  }, [])

  return (
    <>
      <section className="profile">
        <div 
          className="profile__avatar" 
          onClick={props.onEditAvatar}
          style={ {backgroundImage: `url(${userAvatar})`} }>
        </div>
        <h1 className="profile__name">{userName}</h1>
        <button 
          className="profile__edit-button" 
          onClick={props.onEditProfile} 
          type="button" 
          aria-label="Изменить">          
        </button>
        <p className="profile__activity">{userDescription}</p>
        <button 
          type="button" 
          className="profile__add-button" 
          onClick={props.onAddPlace} aria-label="Добавить">            
        </button>

      </section>

      <section className="elements">
        <ul className="elements__container">          
          {cards.map((card) =>            
            <Card
              card={card} 
              onCardClick={props.onCardClick} 
              key={card._id}
            /> 
          )}
        </ul>
      </section>

      <ImagePopup 
        card={props.selectedCard}
        onClose={props.onClose}        
      />

      <PopupWithForm
        onClose={props.onClose}
        onEditProfile={props.onEditProfile}
        title='Редактировать профиль' 
        name='edit'        
        isOpen={`${props.isEditProfilePopupOpen ? 'popup_opened' : ''}`}
        >

        <input 
          className="form__input form__input_value_name"
          type="text"
          name="input-name"
          id="name-input"
          required
          minLength="2"
          maxLength="40"
          />
        <span 
          className="form__input-error form__input-error_position_top"
          id="name-input-error">
        </span>
          
        <input
          className="form__input form__input_value_activity"  
          type="text"
          name="input-activity"
          id="activity-input"
          required
          minLength="2"
          maxLength="200"
          />
        <span 
          className="form__input-error form__input-error_position_button"
          id="activity-input-error">
        </span>
        <button className="form__button" 
          type="submit" 
          name="save-button">Сохранить</button>
      </PopupWithForm>
      
      <PopupWithForm
        onClose={props.onClose}
        title='Новое место' 
        name='add' 
        isOpen={`${props.isAddPlacePopupOpen ? 'popup_opened' : ''}`}
      >
        <input
          className="form__input form__input_value_place"
          type="text"
          id="place-input"
          required
          minLength="2"
          maxLength="30"
          name="place"
          placeholder="Название"
        />
        <span 
          className="form__input-error form__input-error_position_top"
          id="place-input-error">
        </span>

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
          id="link-input-error">
        </span>

        <button
          className="form__button"
          type="submit"
          name="save-button">Создать</button>
      </PopupWithForm>

      <PopupWithForm
        onClose={props.onClose}
        title='Обновить аватар' 
        name='avatar' 
        isOpen={`${props.isEditAvatarPopupOpen ? 'popup_opened' : ''}`}      
      >

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
          id="link-avatar-error">
        </span>
        <button className="form__button"
          type="submit"
          name="avatar-button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm title='Вы уверены?' name='confirmation'>
        <button 
          className="form__button"
          type="submit"
          name="confirmation-button">Да</button>
      </PopupWithForm>
    </>
  )
}

export default Main;