import { Route } from "../../interfaces/interfaces"
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages"

export const routesModuloLazyLayout: Route[] = [
    {
        path: 'lazyPage1',
        to: 'lazyPage1',
        Component: LazyPage1,
        name: 'LazyPage1',
    },
    {
        path: 'lazyPage2',
        to: 'lazyPage2',
        Component: LazyPage2,
        name: 'LazyPage2',
    },
    {
        path: 'lazyPage3',
        to: 'lazyPage3',
        Component: LazyPage3,
        name: 'LazyPage3',
    }
]