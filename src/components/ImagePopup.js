function ImagePopup() {
    return (
        <div className="popup popup_type_img-open">
            <div className="popup__container">
                <button className="popup__close" type="button">Закрыть</button>
                <img className="popup__photo" alt="" src="<%=require('./images/logo.svg')%>" />
                <h2 className="popup__photo-caption"></h2>
            </div>
        </div>
    )
}

export default ImagePopup;