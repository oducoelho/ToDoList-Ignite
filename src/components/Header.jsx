import LogoImg from '../assets/logo-to-do.svg';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={LogoImg} className={styles.Img}/>
    </div>
  )
}
