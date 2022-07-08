import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name ?? '');
        setDescription(currentUser.about ?? '');
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name,
            about: description,
        });

    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            buttonText='Сохранить'
        >
            <div className="form__field">
                <input className="form__input form__input_type_name" type="text" placeholder="Имя"
                    name="name" id="profile-name" value={name} onChange={handleNameChange} minLength="2" maxLength="40" required />
                <span id="profile-name-error" className="error"></span>
            </div>
            <div className="form__field">
                <input className="form__input form__input_type_about-me" type="text" placeholder="О себе"
                    name="aboutme" id="profile-about-me" value={description} onChange={handleDescriptionChange} minLength="2" maxLength="200" required />
                <span id="profile-about-me-error" className="error"></span>
            </div>
        </PopupWithForm>
    )
}

export default EditProfilePopup;