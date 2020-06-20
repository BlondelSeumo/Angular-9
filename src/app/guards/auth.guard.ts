import { Injectable } from '@angular/core';
import { CanActivate, Resolve, Router } from '@angular/router';
import {SharedService} from '../modules/shared/shared.service';

@Injectable()
export class AuthGuard implements CanActivate, Resolve<any> {
  constructor(private router: Router, private service: SharedService) {}

  public async canActivate(): Promise<boolean> {
    if (this.service.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/auth']);
    }
  }

  public resolve(): void {
    if (this.service.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }
}
