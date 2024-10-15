import { Link } from 'react-router-dom'
import style from './Card.module.css'


export function Card({id,img,name,price}){
    return(
        
        <div className={style.item}>
        <img src={img} alt="" />
        <p >{name}</p>
        <div className={style.item_q}>
            <p>{price} ₽</p>
            <button>Добавить в корзину</button>
            <Link  to={`${id}`}>Подробнее</Link>
        </div>
    </div>
    
    )
}