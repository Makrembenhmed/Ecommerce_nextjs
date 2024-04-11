
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'


async function getData() {
    const res = await fetch('https://dummyjson.com/products')
    
   
    if (!res.ok) {
      
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   



export default async function Produit  () {

    const data = await getData()
    const produits=data.products


    return (
        <div className={styles.maincontainer}>
            {
                produits.map(produit=>(
                    <Link href='/produits/id' className={styles.produit}> key={produit.id}
                    <div className={styles.imagecontainer}>
        
                        <Image className={styles.image}
                         src={"https://images.pexels.com/photos/9070107/pexels-photo-9070107.jpeg"}
                         width={350}
                         height={250}
                         alt="image produit"
                     
                        
                        />
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}> {produit.title} </h1>
                            <p className={styles.text}> description produit</p>
                        </div>
                    
        
                    </Link>
        ))
            }

            
        </div>
    );
}


