import Image from 'next/image'
import styles from './page.module.css'
const OneProduit = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header} >
            <div className={styles.info}>
                <h1 className={styles.title}>ipsum dolor sit, amet</h1>
                <p className={styles.desc}> ipsum dolor sit, amet ipsum dolor sit, amet ipsum dolor sit, amet ipsum dolor sit, amet</p>
            </div>
            <div className={styles.imagecontainer}>
                <Image  className={styles.image}

                src={"https://images.pexels.com/photos/9070107/pexels-photo-9070107.jpeg"}
                
                fill= {true}
                
                alt='image detaille produit'
                />
                <span className={styles.author}> makrem ben hmed</span>
            </div>
            </header>
            <div className={styles.content}>
                <p className={styles.text}> detaille : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto error, delectus natus molestiae nostrum vero magnam dolor
                    voluptatum odio laudantium repudiandae, nemo velit reprehenderit voluptas aperiam nihil esse quasi exercitationem. consectetur adipisicing elit. Architecto error, delectus natus molestiae nostrum vero magnam dolor
                    voluptatum odio laudantium repudiandae, nemo velit reprehenderit voluptas aperiam nihil esse quasi exercitationem. consectetur adipisicing elit. Architecto error, delectus natus molestiae nostrum vero magnam dolor
                    voluptatum odio laudantium repudiandae, nemo velit reprehenderit voluptas aperiam nihil esse quasi exercitationem. consectetur adipisicing elit. Architecto error, delectus natus molestiae nostrum vero magnam dolor
                    voluptatum odio laudantium repudiandae, nemo velit reprehenderit voluptas aperiam nihil esse quasi exercitationem.</p>
            </div>
            
        </div>
    );
}

export default OneProduit;
