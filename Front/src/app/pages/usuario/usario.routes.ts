import { Routes } from '@angular/router';
import { UsuarioCadastroComponent } from './components/usuario-cadastro/usuario-cadastro.component';

export const Usuarioroutes: Routes = [
  {
    path: 'Cadastro',
    component: UsuarioCadastroComponent,
    data: { title: 'Cadastro de Usuario' },
  },
];
