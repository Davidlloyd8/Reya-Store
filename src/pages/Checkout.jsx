import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/productData';
import style from '../checkout.module.css';
import { usePaystackPayment } from 'react-paystack';

const Checkout = () => {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  const publicKey = 'pk_test_f22acc1e98f2f45c4adc83dd8cc3694f1c84a53d';
  // const secreteKey = 'sk_test_34a5d4de2f89403e610532d93303663b9e7ddd33';

  const config = {
    email: 'test@test.com',
    amount: product.price * 100,
    publicKey: publicKey,
  };

  const onSuccess = (reference) => {
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    console.log('closed');
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = (e) => {
    e.preventDefault();

    initializePayment(onSuccess, onClose);
  };

  return (
    <section>
      <h5 className={style.title}>Checkout</h5>
      <div className={style.container}>
        <div className={style.card}>
          <section>
            <img src={product.image} alt="" />
          </section>
          <section>
            <h5>{product.name}</h5>
            <span>₦{product.price}</span>
            <p className={style.description}>
              These classic five-pocket cutoff shorts are a summer style <br />
              essential. Frayed hems and side slits keep them looking laid back,{' '}
              <br />
              while a little stretch makes them comfortable for all-day wear.{' '}
            </p>
          </section>

          <section>
            <form action="" onSubmit={handlePayment}>
              <button>Chekout</button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
