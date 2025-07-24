import styles from './qualities.module.css'

export const Qualities = ({qualities}) => {

  const colors = (color) => {

    if(color === 'primary') {
        return 'hotpink'
  } else if (color === 'secondary') {
        return 'blueviolet'
  } else if (color === 'success') {
        return 'green'
  } else if (color === 'danger') {
        return 'brown'
  } else if (color === 'info') {
        return 'dodgerblue'
  } else if (color === 'dark') {
        return 'black'
  } 

}

    return (
      <div className={styles.table}>
      {
        qualities.map((el)=>{
        return <span key={el._id} 
        className={styles.name} 
        style={{backgroundColor: `${colors(el.color)}`}}>
            {el.name}
            </span>
        })
      }
      </div>
    )
}