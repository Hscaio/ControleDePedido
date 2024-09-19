import styles from './GridRow.module.css'
import CustomButton from './CustomButton'

function GridRow({ type, dataCells, id, onEdit, onDelete}){
    let className = styles.grid_row
    if (type == 'title')
        className = styles.grid_title

    function edit(e){
        onEdit(id)
    }

    function del(e){
        onDelete(id)
    }


    return(
        <div style={{display: 'flex'}}>
            <div className={`${styles.grid_container} ${className}`}>
                {dataCells.map((data) =>
                    <div className={styles.grid_cell} style={{width: data.width}}>
                        <p>{data.value}</p>
                    </div>
                )}     
            </div>
            <div className={styles.button_container}>
                {onEdit && <CustomButton icon='edit' iconSize='small' onClick={edit}/>}
                {onDelete && <CustomButton icon='delete' iconSize='small' onClick={del}/>}      
            </div>
        </div>
    )
}

export default GridRow