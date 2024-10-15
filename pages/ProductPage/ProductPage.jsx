import { useParams } from 'react-router-dom'
import style from './ProductPage.module.css'
import { products } from '../../data/data';


export function ProductPage(){
  
    const {id} = useParams();
    const product=products.find(product => product.id == id);
return(
    

    <section className={style.sec}>
        <div className={style.block}>
            <img src={product.img} alt="" />

            <div className={style.text}>
                <p className={style.name}>{product.name}</p>
                <p className={style.opis}>{product.opis}</p>
                <div className={style.price_block}>
                    <p className={style.price}>{product.price} руб </p>
                    <button>Добавить в корзину</button>
                </div>
            </div>``
        </div>
    </section>
)

}