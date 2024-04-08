import styles from "./page.module.css"
import Image from 'next/image'
import Hero from "/public/icons/images/hero.svg"
export default function Home() {
  return (
     <div className={styles.container}>
      
      <div className={styles.col}>
        <h1 className={styles.title}>   title product  </h1>
        <p className={styles.description}> description  de produit</p>
        <button className={styles.button}> Shop Now</button>

      </div>

      <div className={styles.col}> 
      <Image src={Hero} alt="itca shop" className={styles.img}/>
      
      
      </div>
      
      
      
      
       </div>
    );

}
