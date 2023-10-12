import Head from "next/head";

import styles from '../../styles/home.module.scss';
import { FiRefreshCcw } from 'react-icons/fi';
import { useProducts } from "~/hooks/useProducts";

export default function Home() {

  const {products, loading} = useProducts({ productId: null });

  async function handleOpenModalView(id: number) {
  }

  return (
    <>
      <Head>
        <title>Listagem de produtos</title>
      </Head>
      <div>
        <main className={styles.container}>
          <div className={styles.containerHeader}>
            <h1>Cardápio Sorveteria</h1>
            <button>
              <FiRefreshCcw size={25} color="#3ddda3" />
            </button>

          </div>

          <article className={styles.productOrders}>
            {products.length === 0 && (
              <span className={styles.emptyList}>
                Nenhum produto encontrado...
              </span>
            )}

            {products.map(item => (
              <section key={item.id} className={styles.productItem}>
                {/* <button onClick={ () => handleOpenModalView(item.id) }>
                </button> */}
                  <p>{item.nome} - R$ {item.preco}</p>
                  <small>{item.descricao}</small>
              </section>
            )

            )}
          </article>
        </main>
      </div>
      
    </>
  )
}

