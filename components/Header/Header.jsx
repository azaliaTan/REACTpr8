import { NavLink } from 'react-router-dom'
import style from './Header.module.css'


export function Header(){
    return(
         <header>

         <div className="container">

         <div className={style.header}>
       <div className={style.text}>
           <a href="">О нас</a>
           <NavLink to="/">Главная</NavLink>
           <NavLink to="/Katalog">Каталог</NavLink>
           <NavLink to="/UserPage">Пользователи</NavLink>
       </div>
       <div className={style.logo}>
           <img src="/avtotorgLogo 1.svg" alt="" />
       </div>
       <div className={style.btn}>
        
           <button className={style.reg}>Регистрация</button>
           <button className={style.v}>Вход</button>
       </div>
   </div>

        </div>
         </header>
    )
}