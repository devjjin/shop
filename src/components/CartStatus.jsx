import React from 'react';
import { getCarts } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(['carts'], () => getCarts(uid));

  return (
    <div>
      <AiOutlineShoppingCart />
      {products && <p>{products.length}</p>}
    </div>
  );
}
