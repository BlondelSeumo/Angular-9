import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from '../../modules/shared/shared.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit, OnDestroy {

  constructor(
    private service: SharedService,
  ) { }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  public close() {
    this.service.removeDialogComponentFromBody();
  }
}
