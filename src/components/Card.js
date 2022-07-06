import React from 'react';

function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element" onClick={handleClick}>
      
      <button
      className="element__delete"
      type="button"
      aria-label="Удалить фото"></button>

      <img src={card.link} className="element__image" alt={card.name}/>
      <div className="element__content">
        <h2 className="element__title">{card.name}</h2>
        
        <div className="element__like-content">
          <button
          className="element__like"
          type="button"
          aria-label="Лайк"></button>
          <p className="element__like-quantity">{card.likes.length}</p>
        </div>
        
      </div>
    </li>
  )
}

export default Card;
