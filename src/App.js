import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  return (
    <div className='page'>
      <Header/>
      <Main

         onCardClick={
          function handleCardClick (card) {
            setSelectedCard(card);
          } 
        } 

        onEditAvatar={
          function handleEditAvatarClick() {
            setIsEditAvatarPopupOpen(true);
          }
        }
        
        onEditProfile={
          function handleEditProfileClick() {
            setIsEditProfilePopupOpen(true);
          }          
        }

        onAddPlace={
          function handleAddPlaceClick() {
            setIsAddPlacePopupOpen(true);
          }
        }
        
        onClose={
          function closeAllPopups() {
            setIsEditAvatarPopupOpen(false);
            setIsEditProfilePopupOpen(false);
            setIsAddPlacePopupOpen(false);
            setSelectedCard(false);
          }
        }

        isEditProfilePopupOpen = {isEditProfilePopupOpen}
        isAddPlacePopupOpen = {isAddPlacePopupOpen}
        isEditAvatarPopupOpen = {isEditAvatarPopupOpen}
        selectedCard = {selectedCard}
      />

      <Footer/>

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
