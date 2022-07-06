function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }
    
const {name, link, likes} = card;

    return (
        <li className="elements__item">
            <button className="elements__del-button" type="button">Удалить</button>
            <div className="elements__photo" style={{ backgroundImage: `url(${link})` }} alt={name} onClick={handleClick}></div>
            <div className="elements__text">
                <h2 className="elements__title">{name}</h2>
                <div className="elements__like">
                    <button className="elements__like-button" type="button"></button>
                    <span className="elements__like-counter">{likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;