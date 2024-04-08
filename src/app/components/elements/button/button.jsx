"use client"
import styles from "./button.module.css"
const Button = () => {
    return (
        
          <button onClick={()=>{console.log("logout")}} className={styles.logout}>Logout</button>    
        
    );
}

export default Button;
