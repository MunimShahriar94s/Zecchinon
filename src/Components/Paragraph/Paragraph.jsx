import styles from "./Paragraph.module.css"
import Bullet from "../Bullet/Bullet"

function Paragraph(props){
    return(
        <div className={styles.text}>
            <span>{props.text}</span>
            <Bullet text={props.bulletText}/>
        </div>
    )
}

export default Paragraph