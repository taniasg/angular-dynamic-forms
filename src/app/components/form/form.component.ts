import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormControlBase } from 'src/app/models/form/form-control.model';
import { FormControlService } from 'src/app/services/form/form-control/form-control.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
	@Input() controls: FormControlBase<any>[] = [];
	@Input() resetButton: boolean = false;
	@Input() resetLabel: string = 'Borrar';

	@Input() submitButton: boolean = false;
	@Input() submitLabel: string = 'Guardar';

	form: FormGroup;

	@Output() statusForm = new EventEmitter<boolean>();
	@Output() valueForm = new EventEmitter<any>();

	formSubs: Subscription;
	payLoad = '';

	constructor(private formControlService: FormControlService) { }

	ngOnInit() {
		this.form = this.formControlService.toFormGroup(this.controls);

		console.log(this.form);

		// Se emite nuevo estatus del formulario

		this.formSubs = this.form.statusChanges.subscribe(status => {
			this.statusForm.emit(status === 'VALID');
			this.valueForm.emit(this.form.getRawValue());
		})
	}

	ngOnDestroy(): void {
		this.formSubs?.unsubscribe();
	}

	/**
	 * @description Funcion para obtener los datos de la tabla
	 */
	onSubmit() {
		this.payLoad = JSON.stringify(this.form.getRawValue());
	}

	resetForm() {
		this.form.markAsPristine();
		this.form.markAsUntouched();
		this.form.reset();
	}

}
