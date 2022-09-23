import { EmptyToDo } from './EmptyToDo';
import { Trash } from 'phosphor-react'
import styles from './Tasks.module.css';

export const Tasks = () => {
  return (
    <div className={styles.content}>
      <div className={styles.line}>
        <div className={styles.component}>
        <input type="checkbox"/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, 
          <Trash />
        </div>

        <div className={styles.component}>
        <input type="checkbox"/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, 
          <Trash />
        </div>
        
        <EmptyToDo />
      </div>
    </div>
  )
}
