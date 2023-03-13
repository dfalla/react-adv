import { lazy,  } from 'react';
import { Route } from '../interfaces/interfaces';
import { NoLazy } from '../lazyload/pages/NoLazy';
 
const lazyLayout = lazy(()=>import(/* webpackChunkName: "ModuloLazyLoad" */'../lazyload/layout/LazyLayout')); //! Cargamos de forma perezosa el modulo LazyLayout

export const routes: Route[] = [
    {
        path: '/lazyLoad/*',
        to: '/lazyLoad/',
        name: 'Cargar Módulo por lazyLoad - dashboard',
        Component: lazyLayout
    },
    {
        path: 'no-lazy',
        to: '/no-lazy',
        name: 'No Lazy',
        Component: NoLazy
    },
    
]