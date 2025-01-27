import styles from './ButtonCourse.module.css'
import React, { useState, useRef, useEffect } from 'react'
import { useClickOutside } from './useClickOutside';

export function ButtonCourse(){
    const [isOpen, setOpen] =  useState(false)
    const menuReF = useRef(null);
    useClickOutside(useRef, () =>{
        if (isOpen) setTimeout(() => setOpen(false), 50)
    })


    return(
        <div className={styles.dropdown}>
        <button className={styles.button_course} onClick={() => setOpen(!isOpen)}>
            Выбери курс
        </button>
            <div className={`${styles.menu} ${isOpen ? styles.active : ''}`} ref={menuReF}>
                <ul className={styles.menu_list}>
                    <li className={styles.menu_item}><span>Курс 1</span></li>
                    <li className={styles.menu_item}><span>Курс 2</span></li>
                    <li className={styles.menu_item}><span>Курс 3</span></li>
                    <li className={styles.menu_item}><span>Курс 4</span></li>
                </ul>
            </div>
        </div>
    )
}