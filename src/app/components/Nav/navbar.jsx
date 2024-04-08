

import Link from "next/link"
import styles from "./nav.module.css"
import { links } from "./data";
import Button from "../elements/button/button";
import Logo from "../elements/logo/logo";


const Navbar = () => {
    return (

        <div className={styles.container}>
         <Logo/>

          <div className={styles.links}>
                
              {links.map(link=>
                <Link key={link.id} href={link.url} className={styles.link}> {link.title}      </Link>)}
              
          <Button/>
          </div>
        </div>

    
    );
}

export default Navbar;
