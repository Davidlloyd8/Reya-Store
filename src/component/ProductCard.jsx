import style from '../productCard.module.css';
import { Link } from 'react-router-dom';

const productCard = ({ name, price, img, slug }) => {
  return (
    <Link to={`checkout/${slug}`} className={style.container}>
      <img src={img} alt="" className={style.img} />
      <div>
        <p>{name}</p>
        <span>₦{price}</span>
        <button>BUY</button>
      </div>
    </Link>
  );
};

export default productCard;
