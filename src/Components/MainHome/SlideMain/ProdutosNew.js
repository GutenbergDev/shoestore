import React from 'react';
import { useParams } from 'react-router';
import styles from './ProdutosNew.module.css';

const ProdutosNew = () => {
  const [produto, setProduto] = React.useState(null);
  const [produtoIndex, setProdutoIndex] = React.useState(null);
  const { nameId } = useParams()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    async function fetchProduto(url) {
      const response = await fetch(url);
      const json = await response.json();
      setProduto(json.find(item => item.nameId === nameId));
    }
    fetchProduto(`/static/json/ProdutosSlide.json`);
  }, [nameId])

  React.useEffect(() => {
    if(produto) {
      setProdutoIndex(produto.image[0])
    }
  }, [produto]);

  console.log(`Aqui produtoIndex:`, produtoIndex)
  console.log(`Aqui produto:`, produto)

    function handleClick(item) {
        setProdutoIndex(item.target.src)
    }

  if(produto === null) return null;
  return (
    <section className={styles.produtosNew}>
      <div className={`${styles.containerProdutoNew} animeLeft`}>
        <div className={styles.containerProduto1}>
          <div className={styles.produtoImageMini}>
          {produto.image.map((foto, index) => (
              <img 
                key={index} 
                src={foto} 
                onClick={handleClick} 
                className={styles.imageActive}
                alt='imagem'
              /> 
            )
          )}
          </div>
          <div className={`${styles.produtoImage}`}>
            <img src={produtoIndex} alt='imagem'/>
          </div>
        </div>
        <div className={styles.containerProduto2}>
          <div className={styles.containerPrice}>
            <div className={styles.priceStyle}>
              <h2 className={styles.nameTenis}>{produto.name}</h2>
              <span className={styles.price}>R$ {produto.price}</span>
            </div>
            <span className={styles.oldPrice}>R$ {(produto.OldPrice).toFixed(2)}</span>
            <span>em 12x de <span className={styles.parcelas}>R$ {(produto.OldPrice / 12).toFixed(2)}</span></span>
            <span>ou <span className={styles.parcelas}>R$ {(produto.price - produto.price * 0.1).toFixed(2)} à vista.</span></span>
          </div>
          <div className={styles.brandContent}>
            <span>Marca: <span className={styles.brand}>{produto.brand}</span></span>
          </div>
          <div className={styles.hrPrice}></div>
          <div>
          <div className={styles.btnContainer}>
            <div className={styles.btnMain}>
              <span className={styles.btnMainText}>Comprar</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProdutosNew;