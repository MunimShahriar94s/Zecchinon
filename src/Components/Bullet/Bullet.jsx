import styles from "./Bullet.module.css"

function Bullet(props){
    let style = {}
    if (props.invert == true){
        style = {
            filter: "invert()"
        }
    }

    return(
        <div style={style} className={styles.bullet}><span style={style} className={styles.dot}>•</span>{props.text}</div>
    )
}

export default Bullet