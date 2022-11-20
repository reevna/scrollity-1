import styles from '../../common/menuIcon/MenuIcon.module.css';
import add from '../../../assets/images/barIcons/add.svg';

const AddNewSlide = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={add} alt='Add new slide' />
    </div>
  );
}

export default AddNewSlide;
