import React from 'react';

function PopupWithForm({
  onClose, 
  isOpen, 
  name, 
  title, 
  children, 
  buttonText
}) {
  
  function handleCloseOverlay(evt) {
    return evt.target.classList.contains('popup_opened') && onClose();
  }

  return (
    <div className={`popup popup_type_${name} ${isOpen}`}
      onClick={handleCloseOverlay}>

      <div className="popup__container">
        
        <button
          className={`popup__close popup__close_type_${name}`}
          type="button"
          aria-label="Закрыть"
          onClick={onClose}></button>

        <h2 className="popup__title">{title}</h2>
        
        <form 
          className={`form form_type_${name}`} 
          name={`popup-${name}`} 
          noValidate/>{children}
        <button className="form__button"
          type="submit" 
          name="save-button">{buttonText}</button>
      </div>
    </div>
  )
}

export default PopupWithForm;