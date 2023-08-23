import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addNewProduct, fetchProducts } from '../api/firebase';

export default function useProducts() {
  const queryClient = useQueryClient();

  const prouctsQuery = useQuery(['products'], fetchProducts, {
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSucces: () => queryClient.invalidateQueries(['products']),
    },
  );

  return { prouctsQuery, addProduct };
}
