import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../../modules/shared/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guest-layout',
  templateUrl: './guest-layout.component.html',
  styleUrls: ['./guest-layout.component.css']
})
export class GuestLayoutComponent implements OnInit {

  public form: FormGroup;
  public busy = false;

  constructor(
    private fb: FormBuilder,
    private service: SharedService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [undefined, [Validators.required]],
      password: [undefined, [Validators.required, Validators.minLength(5)]],
    });
  }

  public submit() {
    this.busy = true;
    setTimeout(() => {
      const {username, password} = this.form.value;
      this.service.login(username, password)
        .subscribe(res => {
          this.busy = false;
          this.router.navigate(['']);
        }, error => {
          this.busy = false;
        });
    }, 3000);
  }

}
