import { createContext, ReactElement, CSSProperties } from 'react'

import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductContextProps, ProductCardHandlers } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext;

export interface Props { 
    // children: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string;
    product: Product;
    initialValues?: InitialValues;
    style?: CSSProperties;
    value?: number;
    onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues })

    return (
    <Provider
        value={{
            counter,
            product,
            increaseBy,
            maxCount
        }}    
    >
            <div className={`${styles.productCard} ${className}`} style={ style }>
                { children({
                        count: counter,
                        maxCount,
                        isMaxCountReached,
                        product,
                        increaseBy,
                        reset
                    })
                
                }
        </div>
    </Provider>
  )
}


