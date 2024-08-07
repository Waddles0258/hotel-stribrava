export const Room = ({onClick, type, cost, text, img}) =>{
    return(
        <>
            <div class="card" onClick={onClick}>
                <img class="card__image" src={`http://localhost:4000${img}`} />
                <div class="card__title">{type}</div>
                <div class="card__body">{cost} kč na osobu</div>
            </div>
        </>
    )
}