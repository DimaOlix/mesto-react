import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element" onClick={handleClick}>
      
      <button
      className="element__delete"
      type="button"
      aria-label="Удалить фото"></button>

      <img src={props.card.link} className="element__image" alt={props.card.name}/>
      <div className="element__content">
        <h2 className="element__title">{props.card.name}</h2>
        
        <div className="element__like-content">
          <button
          className="element__like"
          type="button"
          aria-label="Лайк"></button>
          <p className="element__like-quantity">{props.card.likes.length}</p>
        </div>
        
      </div>
    </li>
  )
}

export default Card;
