import React from 'react';

function PopupWithForm(props) {

  function handleCloseOverlay(evt) {
    return evt.target.classList.contains('popup_opened') && props.onClose();
  }

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen}`}
      onClick={handleCloseOverlay}>

      <div className="popup__container">
        
        <button
          className={`popup__close popup__close_type_${props.name}`}
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}></button>

        <h2 className="popup__title">{props.title}</h2>
        
        <form 
          className={`form form_type_${props.name}`} 
          name={`popup-${props.name}`} 
          noValidate/>{props.children}
      </div>
    </div>
  )
}

export default PopupWithForm;