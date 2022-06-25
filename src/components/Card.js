function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="elements__item">
            <button className="elements__del-button" type="button">Удалить</button>
            <img className="elements__photo" style={{ backgroundImage: `url(${props.link})` }} alt="" onClick={handleClick}/>
            <div className="elements__text">
                <h2 className="elements__title">{props.name}</h2>
                <div className="elements__like">
                    <button className="elements__like-button" type="button"></button>
                    <span className="elements__like-counter">{props.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;