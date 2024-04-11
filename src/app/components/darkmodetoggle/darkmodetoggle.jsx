"use client"
import { useContext } from 'react';
import styles from './darkmodetoggle.module.css';
import { Themecontext } from '@/Context/themecontext';

const Darkmodetoggle = () => {
    const {mode,toggle} =useContext(Themecontext)
    return (
        <div>
            <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🌚</div>
            <div className={styles.switcher}          
            style={mode=="light" ? {left:"2px"}: {right:"2px"}}
            />
            </div>
            
        </div>
    );
}

export default Darkmodetoggle;
