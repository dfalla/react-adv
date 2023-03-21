import { useState } from 'react';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components'
import { useShoppingCart } from '../hooks/useShoppingCart';
import { Product } from '../interfaces/interfaces';


import '../styles/custom-styles.css';

const product1 = {
    id: '1',
    title: 'Coffe Mug',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffe Mug 2',
    img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2];



export const ShoppingPage = () => {


    const { shoppingCart, onProductCountChange } = useShoppingCart()
    


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
            {
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className='bg-dark text-white'
                        onChange={onProductCountChange}
                        value={ shoppingCart[product.id]?.count || 0 }
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
                    </ProductCard>
                    
                ))    
                
            }
                
                
        </div>


        <div className="shopping-cart">
                
            {
                Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard
                        key={ key }
                        product={product}
                        className='bg-dark text-white'
                        onChange={ onProductCountChange }
                        value={product.count}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100px'
                        }}
                    >
                        <ProductImage
                            className='image'
                        />
                        <ProductButtons
                            className='custom-bottons'
                        />        
                    </ProductCard>
                ))
            }      

        </div>    
    </div>
  )
}