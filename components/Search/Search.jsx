import style from './Search.module.css'
export function Search ({handleChange}){
    return(
        <input type="text" className={style.in} onChange={handleChange} placeholder='Поиск'/>
    )
}