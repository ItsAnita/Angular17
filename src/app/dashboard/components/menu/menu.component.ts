import { CommonModule,  } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule, RouterModule//importar routermodule 
  ],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent { 
  menuList = routes
  
    .map((route)=>route.children??[])
    .flat() //quita el arreglo de abajo
    .filter(route => route&& !route.path?.includes('**')) //busca rutas sin asterisco
    
  
}
