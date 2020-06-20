import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {DialogComponent} from '../../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dialogComponentRef: ComponentRef<DialogComponent>;

  constructor(
    private readonly http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  public isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
  }

  public sendData(params: any) {
    return of(params);
  }

  public login(uname: string, pwd: string) {
    localStorage.setItem('loggedIn', 'true');
    return of(true);
  }

  public appendDialogComponentToBody() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.dialogComponentRef = componentRef;
  }

  public removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }
}
