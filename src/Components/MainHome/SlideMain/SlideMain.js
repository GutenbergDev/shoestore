import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SlideMain.module.css';

const SlideMain = ({ slideMain }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  let newProdutoSlide = slideMain.filter((produto) => produto.status === 'new')

  React.useEffect(() => {
   const { width } = contentRef.current.getBoundingClientRect();
   
   const timer = setTimeout(() => {

      setPosition(-(width * active))
      if(active < newProdutoSlide.length - 1) {
        setActive(active + 1)
      } else if(active === 2) {
        setActive(0)
      }
    }, 5000)

    
    return () => clearTimeout(timer)
  }, [active, newProdutoSlide.length])

  return (
    <section className={`${styles.containerS}`}>
      <div 
        ref={contentRef}
        className={styles.content} 
        style={{ transform: `translateX(${position}px)` }}
      >
        {newProdutoSlide.map(produto => (
          <Link  className={styles.item}   key={produto.nameId} to={`/produtos/${produto.nameId}`}>

              <div>
              <div 
                className={`${styles.linkSlideContainer} animeLeft`}
                >
                  <div className={styles.linkSlideItem}>
                    <div>
                      <h1 className={styles.h1}>{produto.name}</h1>
                      <h2 className={styles.h2}>{produto.subName}</h2>
                    </div>  
                    <div>
                      <p className={styles.p}>{produto.description}</p>
                    </div>
                  </div>
                  <div className={styles.linkSlideItemTwo}>
                    <img src={produto.imageSlide} alt="aa" />
                  </div>
              </div>
            </div>
          </Link>
          
        ))}
      </div>
      <nav className={`${styles.nav}`}>
          
      </nav>
    </section>
  )
}

export default SlideMain;