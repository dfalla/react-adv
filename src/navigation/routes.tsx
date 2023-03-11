import { lazy, LazyExoticComponent } from 'react';
import { LazyPage1 } from '../lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route { 
    path: string;
    to: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | (JSXComponent)
}
 
const lazyPage2 = lazy(() => import(/* webpackChunkName: LazyPage1 */ '../lazyload/pages/LazyPage2'))

const lazyPage3 = lazy(() => import(/* webpackChunkName: LazyPage2 */ '../lazyload/pages/LazyPage3'))

export const routes: Route[] = [
    {
        path: 'home',
        to: '/home',
        name: 'Home',
        Component: LazyPage1
    },
    {
        path: 'about',
        to: '/about',
        name: 'About',
        Component: lazyPage2
    },
    {
        path: 'users',
        to: '/users',
        name: 'Users',
        Component: lazyPage3,

    }
]