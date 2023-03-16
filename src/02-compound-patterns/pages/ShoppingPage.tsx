import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components'


import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffe Mug - React',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {

    return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
            

        <div
            style={{
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <ProductCard
                product={product}
                className='bg-dark text-white'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    backgroundColor: '#70D1F8'
                }}
            >
                <ProductCard.Image className='image'/>
                <ProductCard.Title className='title'/>
                <ProductCard.Buttons className='custom-bottons'/>        
            </ProductCard>
                
            <ProductCard
                product={product}
                className='bg-dark text-white'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    backgroundColor: '#70D1F8'
                }}
            >
                <ProductImage
                    className='image'
                    style={{
                        borderRadius: '50%'
                    }}
                />
                <ProductTitle
                    className='title'
                    style={{
                        fontWeight: 'bold'    
                    }}    
                />
                <ProductButtons
                    className='custom-bottons'
                    style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}
                />        
            </ProductCard>
                
        </div>
    </div>
  )
}