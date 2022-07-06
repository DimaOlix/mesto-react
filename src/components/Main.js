import React from 'react';
import Api from '../utils/Api.js';
import Card from './Card.js';

function Main({ 
  onEditAvatar, 
  onEditProfile, 
  onAddPlace, 
  onCardClick, 
}) {

  const[userName, setUserName] = React.useState('');
  const[userDescription, setUserDescription] = React.useState('');
  const[userAvatar, setUserAvatar] = React.useState('');
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
          onClick={onEditAvatar}
          style={ {backgroundImage: `url(${userAvatar})`} }>
        </div>
        <h1 className="profile__name">{userName}</h1>
        <button 
          className="profile__edit-button" 
          onClick={onEditProfile} 
          type="button" 
          aria-label="Изменить">          
        </button>
        <p className="profile__activity">{userDescription}</p>
        <button 
          type="button" 
          className="profile__add-button" 
          onClick={onAddPlace} aria-label="Добавить">            
        </button>

      </section>

      <section className="elements">
        <ul className="elements__container">          
          {cards.map((card) =>            
            <Card
              card={card} 
              onCardClick={onCardClick} 
              key={card._id}
            /> 
          )}
        </ul>
      </section>


    </>
  )
}

export default Main;