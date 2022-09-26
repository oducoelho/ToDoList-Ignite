import { EmptyToDo } from './EmptyToDo';
import { Trash } from 'phosphor-react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import styles from './Tasks.module.css';


export const Tasks = ({ tasks, onDeleteTask }) => {
  const handleDeleteTask = () => {
    onDeleteTask(tasks)
  }

  return (

    <div className={styles.teste}>
      <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div/>
      </button>
      <p>
        {tasks}
      </p>

      <button onClick={handleDeleteTask}  className={styles.deleteButton}>
        <Trash size={20} className={styles.trash}/>
      </button>
    </div>
    </div>
  )
}
