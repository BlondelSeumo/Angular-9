import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../modules/shared/shared.service';
import {catchError, map, timeout, timeoutWith} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  public form: FormGroup;
  public busy = false;
  constructor(
    private fb: FormBuilder,
    private service: SharedService,
  ) { }

  public ngOnInit() {
    this.form = this.fb.group({
      name: [undefined, [Validators.required]],
      username: [undefined, [Validators.required]],
      password: [undefined, [Validators.required, Validators.minLength(5)]],
      picture: [undefined, []],
    });
  }

  public handlePictureSelect($event) {
    const file = $event.target.files[0];
    if (file) {
      console.log('Got file', file);
      this.form.get('picture').patchValue(file);
    }
  }

  public submit() {
    this.busy = true;
    setTimeout(() => {
      this.service.sendData(this.form.value).subscribe((res) => {
        this.busy = false;
        console.log(res);
      }, error => {
        this.busy = false;
      });
    }, 3000);
  }

  public openDynamicComponent() {
    this.service.appendDialogComponentToBody();
  }
}
