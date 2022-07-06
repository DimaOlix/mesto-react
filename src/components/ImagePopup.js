import React from 'react';

function ImagePopup(props) {

  function handleCloseOverlay(evt) {
    return evt.target.classList.contains('popup_opened') && props.onClose();
  }

  return (
    <div className={`popup popup_type_photo ${props.card ? 'popup_opened' : ''}`} 
      onClick={handleCloseOverlay}>

      <div className="popup__container-photo">
        
        <button
          className="popup__close popup__close_type_image"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}>
          
        </button>
        
        <img 
          className="popup__photo-element" 
          src={`${props.card}` ? props.card.link : ''} 
          alt={props.card.name}
        />
        <h3 className="popup__title-photo">{props.card.name}</h3>
      </div>
    </div>
  )
}

export default ImagePopup;
