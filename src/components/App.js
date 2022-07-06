import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick (card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }          
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className='page'>
      <Header/>
      <Main
        onCardClick={handleCardClick} 
        onEditAvatar={handleEditAvatarClick}        
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}        
      />

      <PopupWithForm
        onClose={closeAllPopups}
        onEditProfile={handleEditProfileClick}
        title='Редактировать профиль' 
        name='edit'
        buttonText='Сохранить'        
        isOpen={`${isEditProfilePopupOpen ? 'popup_opened' : ''}`}
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
      </PopupWithForm>
      
      <PopupWithForm
        onClose={closeAllPopups}
        title='Новое место' 
        name='add'
        buttonText='Создать'        
        isOpen={`${isAddPlacePopupOpen ? 'popup_opened' : ''}`}
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
      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        title='Обновить аватар' 
        name='avatar'
        buttonText='Сохранить'
        isOpen={`${isEditAvatarPopupOpen ? 'popup_opened' : ''}`}      
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
      </PopupWithForm>

      <PopupWithForm 
        title='Вы уверены?' 
        name='confirmation'
        buttonText='Да'>
      </PopupWithForm>

      <Footer/>
    </div>
  );
}

export default App;
