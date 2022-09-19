import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePComponent } from './detalle-p/detalle-p.component';
import { DetalleTVComponent } from './detalle-tv/detalle-tv.component';
import { HomeComponent } from './home/home.component';
import { ListaTvComponent } from './lista-tv/lista-tv.component';
import { ListaComponent } from './lista/lista.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'movies',
    component: ListaComponent,
  },
  {
    path: 'tvs',
    component: ListaTvComponent,
  },
  {
    path: 'movie/:id',
    component: DetallePComponent,
  },
  {
    path: 'tv/:id',
    component: DetalleTVComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
