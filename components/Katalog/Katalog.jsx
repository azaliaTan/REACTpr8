import { useState } from 'react'
import { products } from '../../data/data'
import { Card } from '../Card/Card'
import style from './Katalog.module.css'
import { Search } from '../Search/Search'



export function Katalog(){
    const[query,setQuery]=useState('')
    function handleChange(e){
        setQuery(e.target.value)
    }
    const filteredProducts=products.filter((product)=>{
        return product.name.toLowerCase().includes(query.toLowerCase());
    })
    return(
        
        
           <div className={style.katalog}>
            <h5>Каталог товаров</h5>
             
            <div className={style.kateg}>
                <p>Категории</p>
                <button className={style.kk}>Все товары</button>
                <button className={style.k}>Шины\колеса</button>
                <button className={style.k}>Масла</button>
                <button className={style.k}>Ароматизаторы</button>
            </div>
            <Search handleChange={handleChange}/>
            <div className={style.list}>
           
            {
            filteredProducts.length ?
            filteredProducts.map((product)=>{
                return(
                    <Card {...product}/>
                )
            })
            :
            <p className="er">Не найдено</p>
              }
               


            </div>

            <div className={style.qq}>
             
             <button className={style.more}>Загрузить еще товары</button></div>

           </div>



      
       
    )
}