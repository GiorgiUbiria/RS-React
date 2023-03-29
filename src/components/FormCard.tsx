import { FormsProps } from '../types/FormsInterface';
import styles from '../styles/FormCard.module.css';

const Forms = (props: FormsProps) => {
  const { card } = props;

  return (
    <div className={styles.card}>
      <h2 className={styles.card_title}>
        {card.name} {card.surname}
      </h2>
      <img src={URL.createObjectURL(card.file)} alt="image" className={styles.card_img} />
      <div className={styles.card_desc}>
        <p> ZIP Code: {card.zipCode} </p>
        <p> Date of Birth: {card.birthDate} </p>
        <p> Date of Delivery: {card.deliveryDate} </p>
        <p> Place of Residence: {card.city} </p>
        <p> Gender: {card.gender} </p>
      </div>
    </div>
  );
};

export default Forms;
