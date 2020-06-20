import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TestFormComponent} from '../../views/test-form/test-form.component';
import { GuestLayoutComponent } from '../../components/layout/guest-layout/guest-layout.component';
import {RouterModule} from '@angular/router';
import {SharedService} from './shared.service';
import { AuthLayoutComponent } from '../../components/layout/auth-layout/auth-layout.component';
import { DialogComponent } from '../../components/dialog/dialog.component';

@NgModule({
  declarations: [
    TestFormComponent,
    GuestLayoutComponent,
    AuthLayoutComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    SharedService,
  ],
  entryComponents: [
    DialogComponent,
  ]
})
export class SharedModule { }
