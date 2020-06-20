import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  declarations: [
    BrowserModule,
    SharedModule,
  ],
  providers: [],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
