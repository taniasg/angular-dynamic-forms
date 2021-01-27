import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControlBase } from './models/form/form-control.model';
import { FormService } from './services/form/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dynamic-form';
  controls: Observable<FormControlBase<any>[]>;

  constructor(private formService: FormService) {
    this.controls = this.formService.getBusquedaUsuarioForm();
  }

  onStatusFormChanges(status: boolean): void {

  }

  onValueFormChanges(value: any): void {

  }
}
