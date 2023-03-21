import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    initialValues?: InitialValues;
    product: Product;
    value?: number;
    onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs ) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);


    const increaseBy = (value: number) => { 

        let newValue = Math.max(counter + value, 0)

        if (initialValues?.maxCount) { 
            newValue = Math.min(newValue, initialValues.maxCount)
        }

        setCounter(newValue);
        onChange && onChange({count: newValue, product})
    }

    const reset = () => { 
        setCounter(initialValues?.count || value )
    }

    useEffect(() => {
        if ( !isMounted.current ) return;
        setCounter(value)
    }, [value]);

    

    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        increaseBy,
        reset
    }
  
}
