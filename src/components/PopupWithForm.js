function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? `popup_opened`: ""}`} onClick={props.onClose}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={props.onClose}>Закрыть</button>
                <form className="popup__form form" method="post" name={props.name} id={`form-${props.name}`}>
                    <h2 className="form__title">{props.title}</h2>
                    {props.children}
                    <button className="form__save" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;