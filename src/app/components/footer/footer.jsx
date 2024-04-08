import styles from './footer.module.css'
import {icons} from './data'

import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
            @2023 ITCASHOP . ALL RIGHT IS RESERVED.
            </div>
            <div className={styles.social}>
              
                 
            {icons.map(icon=>
                <Image key={icon.id} src={icon.src} 
                width ={25}
                height={25}
                className={styles.icon}
                alt={icon.title}
                />       )}
           
            
            </div>

        </div>
    );
}

export default Footer;
