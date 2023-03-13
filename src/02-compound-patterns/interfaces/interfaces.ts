import { ReactElement } from "react";

export interface ProductCardProps { 
    children: ReactElement | ReactElement[];
    product: Product;
}


export interface Product { 
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps { 
    product: Product;
    counter: number;
    increaseBy: (value: number) => void
}

export interface ProductCardHOCProps { 
    ({ product, children }: ProductCardProps): JSX.Element,
    Image: ({img} :{img?: string}) => JSX.Element,
    Title: ({title}: {title?: string}) => JSX.Element,
    Buttons: () => JSX.Element
    
}