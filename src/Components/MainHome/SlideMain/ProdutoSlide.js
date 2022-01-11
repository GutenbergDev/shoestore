import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../../Head';
import styles from './ProdutoSlide.module.css';

const ProdutoSlide = () => {
  const [produtosSlide, setProdutosSlide] = React.useState(null)

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  React.useEffect(() => {
    async function fetchProdutosSlide(url) {
      const response = await fetch(url);
      const json = await response.json();

      setProdutosSlide(json);
    }

    fetchProdutosSlide(`/static/json/ProdutosSlide.json`);
  }, []);

  if(produtosSlide === null) return null;
//if(newProdutos === null) return null;
  return (
    <section className={styles.containerProduto}>
      <Head 
        title={`Shoes | Produtos`} 
        description={`Descrição do site Ranek`} 
      />
      <div className={styles.produto}>
        {produtosSlide.map((produto) => (
          <Link 
            className={`${styles.containerItem} animeLeft`}
            to={`/produto/${produto.nameId}`}
            key={produto.id}
          >
            <div>
              <img src={produto.image[0]} alt='imagem' />
            </div>
            <div className={`${styles.dadosItem}`}>
              <span className={styles.oldPrice}>R$ {produto.OldPrice}.00</span>
              <span className={styles.price}>R$ {produto.price}</span>
            </div>
          </Link>
        ))

        }
      </div>
    </section>
  )
}

export default ProdutoSlide;