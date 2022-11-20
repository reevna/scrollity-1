import styles from '../../common/menuIcon/MenuIcon.module.css';
import italic from '../../../assets/images/barIcons/italic.svg';

const Italic = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={italic} alt='Italic' />
    </div>
  );
}

export default Italic;
