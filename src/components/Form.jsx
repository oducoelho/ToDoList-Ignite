import { PlusCircle} from 'phosphor-react'
import { useState } from 'react'

import styles from './Form.module.css';

export const Form = () => {
  const [task, setTask] = useState([{
    title: '',
    isComplete: false,
  }])

  const handleClick = (e) => {
    e.preventDefault();
    console.log(task);
  }

  const handlewrite = (e) => {
    const teste = e.target.value
    setTask(teste)
  } 


  return (
    <div>
      <form className={styles.form}>
        <input 
          type="text"
          placeholder="Adicione uma nova tarefa"
          className={styles.input}
          onChange={handlewrite}
        />
        
        <button 
          className={styles.button}>Criar<PlusCircle size={15}
          onClick={handleClick}
        />
        </button>
      </form>

      <div className={styles.header}>
        <p className={styles.content}>Tarefas criadas <span>5</span></p>
        <p>Concluídas <span>2 de 5</span></p>
      </div>
    </div>
  )
}
