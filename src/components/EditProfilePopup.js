import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import PopupWithForm from "./PopupWithForm.js";
import { useForm } from "../hooks/useForm.js";


function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  const currentUser = React.useContext(CurrentUserContext);

  const{values, handleChange, setValues} = useForm({});



  const [nameUser, setNameUser] = React.useState('');
  const [descriptionUser, setDescriptionUser] = React.useState('');

  React.useEffect(() => {
    setNameUser(currentUser.name);
    setDescriptionUser(currentUser.about);
  }, [currentUser, isOpen])

  function handleInputUserName(evt) {
    setNameUser(evt.target.value);
  }

  function handleInputUserDescription(evt) {
    setDescriptionUser(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateUser({
      name: nameUser,
      about: descriptionUser,
    });
  } 

  return (
    <PopupWithForm
      onClose={onClose}
      title='Редактировать профиль'
      name='edit'
      buttonText='Сохранить'
      isOpen={`${isOpen ? 'popup_opened' : ''}`}
      onSubmit={handleSubmit}
    >
      <input
        className="form__input form__input_value_name"
        type="text"
        name="input-name"
        id="name-input"
        value={nameUser}
        onChange={handleInputUserName}
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
        value={descriptionUser}
        onChange={handleInputUserDescription}
        required
        minLength="2"
        maxLength="200"
        />
      <span
        className="form__input-error form__input-error_position_button"
        id="activity-input-error">
      </span>
    </PopupWithForm>  
  )
}

export default EditProfilePopup;