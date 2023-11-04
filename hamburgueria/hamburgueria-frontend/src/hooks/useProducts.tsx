import { useEffect, useState } from "react";
import { setupAPIClient } from "~/services/api";

export interface IProduct {
  id: number;
  nome:  string;
  descricao:  string;
  preco: number;
  categoria_id: number
}

export interface IRequestProps {
  productId: number | null;
}

export const useProducts = ({ productId }: IRequestProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function loadProducts() {
      const apiClient = setupAPIClient();
      const baseURL = apiClient.defaults.baseURL;
      const response = await apiClient.get(`${baseURL}/produtos/${(!productId ? '' : productId)}`);

      setProducts(response.data);
      setLoading(false);
    }

    loadProducts();
  }, [productId]);

  return { products, loading }
}