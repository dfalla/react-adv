import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs { 
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ product, onChange, value = 0 }: useProductArgs ) => {
    const [counter, setCounter] = useState(value);

    const increaseBy = (value: number) => { 

        const newCounter = Math.max(counter + value, 0)

        setCounter(newCounter);
        onChange && onChange({count: newCounter, product})
    }


    useEffect(() => {
        setCounter(value)
    }, [value]);

    return {
        counter,
        increaseBy
    }
  
}
