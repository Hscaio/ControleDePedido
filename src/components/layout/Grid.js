import styles from './Grid.module.css'

function Grid(){
    return(
        <div className={styles.grid_container}>
            <div className={styles.grid_item}>Item 1</div>
            <div className={styles.grid_item}>Item 2</div>
            <div className={styles.grid_item}>Item 3</div>
            <div className={styles.grid_item}>Item 4</div>
            <div className={styles.grid_item}>Item 5</div>
            <div className={styles.grid_item}>Item 6</div>
        </div>
    )
}

export default Grid