import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent:()=> import ('./dashboard/dashboard.component'),
        children:[
            {
                path: 'controlflow',
                title: 'Control flow',
                loadComponent:()=> import ('./dashboard/pages/control-flow/control-flow.component'),
                },

                {
                path: 'deferoptions',
                title: 'Defer Options',
                loadComponent:()=> import ('./dashboard/pages/defer-options/defer-options.component'),
                },
                {
                path: 'misejemplos',
                title: 'Mis Ejemplos',
                loadComponent:()=> import ('./dashboard/pages/mis-ejemplos/mis-ejemplos.component'),
                },
                {
                path: 'deferviews',
                title: 'Defer Views',
                loadComponent:()=> import ('./dashboard/pages/defer-views/defer-views.component'),
                },
                {
                path: 'reactive-forms',
                title: 'Reactive Forms',
                loadComponent:()=> import ('./dashboard/pages/reactive-forms/reactive-forms.component'),
                },
                {
                path: 'forms-ropa',
                title: 'Forms Ropa',
                loadComponent:()=> import ('./dashboard/pages/forms-ropa/forms-ropa.component'),
                },
                {
                path: 'dinamic-form',
                title: 'Dinamic Form',
                loadComponent:()=> import ('./dashboard/pages/dinamic-form/dinamic-form.component'),
                },
                {
                path: 'preguntas-arrayform',
                title: 'Dinamic ArrayForm',
                loadComponent:()=> import ('./dashboard/pages/preguntas-formarray/preguntas-formarray.component'),
                },
                {
                path: 'registro-form',
                title: 'Registro form',
                loadComponent:()=> import ('./dashboard/pages/registro-form/registro-form.component'),
                },
                {
                path: 'pagos-contador',
                title: 'Pagos Contador',
                loadComponent:()=> import ('./dashboard/pages/pagos-contador/pagos-contador.component'),
                },
                {
                path: 'pendientes-principal',
                title: 'Pendientes Principal',
                loadComponent:()=> import ('./dashboard/pages/pendientes-principal/pendientes-principal.component'),
                },
                {
                path: 'practica',
                title: 'practica',
                loadComponent:()=> import ('./dashboard/pages/practica/practica.component'),
                },
                {
                path: '**',
                pathMatch:'full',
                redirectTo:'controlflow'

                }
             ]
    },
    {
        path: '**',
        pathMatch:'full',
        redirectTo:'dashboard'

    }
]

