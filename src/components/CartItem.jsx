import React from 'react';
import { addOrUpdateToCart } from '../api/firebase';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';

export default function CartItem({
  product,
  product: { id, image, title, category, quantity, option, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };

  const handlePlus = () =>
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });

  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{option}</p>
        <div>
          <AiOutlineMinusSquare onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare onClick={handlePlus} />
        </div>
      </div>
    </li>
  );
}
