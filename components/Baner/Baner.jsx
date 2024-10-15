import style from './Baner.module.css'


export function Baner(){
    return(
       

        <div className={style.baner}>
        <img src="/ban.png" alt="" />
        <button className={style.ban}>
            О компании <a href="#">АвтоТорг</a>
        </button>
    </div>
      
        
    )
}