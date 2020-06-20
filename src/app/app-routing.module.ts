import {RouterModule, Routes} from '@angular/router';
import {TestFormComponent} from './views/test-form/test-form.component';
import {GuestLayoutComponent} from './components/layout/guest-layout/guest-layout.component';
import {AuthLayoutComponent} from './components/layout/auth-layout/auth-layout.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    component: GuestLayoutComponent,
    component: AuthLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        component: TestFormComponent,
    ],
    path: '',
  },
  {
    component: GuestLayoutComponent,
    path: 'auth'
  },
  {
    path: '**',
    redirectTo: ''
    redirectTo: 'auth'
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
})
export class AppRoutingModule { }
