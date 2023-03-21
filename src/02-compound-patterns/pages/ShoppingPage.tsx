import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components'


import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffe Mug',
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {

    return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            initialValues={{
                count: 0,
                maxCount: 10
            }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                backgroundColor: '#70D1F8'
            }}
        >
            
            {
                ({count, increaseBy, isMaxCountReached, reset, maxCount }) => (
                    <>
                        <ProductImage
                            className='image'
                            style={{
                                borderRadius: '50%'
                            }}
                        />
                        <ProductTitle
                            className='title'
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold'    
                            }}    
                        />
                        <ProductButtons
                            className='custom-bottons'
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        />
                        <button
                            onClick={ reset }
                        >
                            Resetear
                        </button>

                        <button
                            onClick={() => increaseBy(-2)}
                        >
                            -2
                        </button>

                        {
                            (!isMaxCountReached && <button onClick={() => increaseBy(+2)} > +2 </button>)
                            
                        }

                        <span> {count} - { maxCount }</span>

                        
                    </>

                )
                    
                
            }
           
        </ProductCard>
    </div>
  )
}