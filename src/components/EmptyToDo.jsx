import clipboard from '../assets/Clipboard.svg'
import styles from './EmptyToDo.module.css'

export const EmptyToDo = () => {
  return (
    <div className={styles.content}>
      <img src={clipboard} className={styles.img}/>
      <p className={styles.firstText}>Você ainda não tem tarefas cadastradas</p>
      <p className={styles.secondText}>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}