import React from "react";
import PopupWithForm from "./PopupWithForm";


function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace
}) {

  const[title, setTitle] = React.useState('');
  const[link, setLink] = React.useState('');

  React.useEffect(() => {
    if(!isOpen) {
    setTitle('');
    setLink('');
    }
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      title: title,
      link: link
    });
  } 

  function handleInputCardTitle(evt) {
    setTitle(evt.target.value);
  }

  function handleInputCardLink(evt) {
    setLink(evt.target.value);
  }

  return (
    <PopupWithForm
    onClose={onClose}
    onSubmit={handleSubmit}
    title='Новое место'
    name='add'
    buttonText='Создать'
    isOpen={`${isOpen ? 'popup_opened' : ''}`}>
    
    <input
      className="form__input form__input_value_place"
      value={title}
      onChange={handleInputCardTitle}
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
      value={link}
      onChange={handleInputCardLink}
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
  )
}

export default AddPlacePopup;