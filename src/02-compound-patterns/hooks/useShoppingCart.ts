import { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});


    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart((oldShoppingcart) => {


            const productInCart: ProductInCart = oldShoppingcart[product.id] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0)) {
                productInCart.count += count;

                return {
                    ...oldShoppingcart,
                    [product.id]: productInCart
                }
            }

            // Borrar el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingcart;

            return { ...rest }

            // if (count === 0) { 

            //     //! eliminar un objeto mediante desestructuración

            //     //!
            //     const { [product.id]: toDelete, ...rest } = oldShoppingcart;
            //     //!
                
            //     console.log({toDelete})

            //     return {...rest}
            // }

            // return {
            //     ...oldShoppingcart,
            //     [product.id]: {...product, count}
            // }
        });
    }
    return {
        shoppingCart,
        onProductCountChange
    }
}
