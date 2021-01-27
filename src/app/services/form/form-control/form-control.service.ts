import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlBase } from 'src/app/models/form/form-control.model';

@Injectable({
	providedIn: 'root'
})
export class FormControlService {
	constructor() { }

	toFormGroup(controls: FormControlBase<string>[]) {
		const group: any = {};

		controls.forEach(control => {
			const validators =
				control.validators ?
					control.validators.map(validator => {
						if (validator.key === 'required') {
							return Validators.required
						}
						else {
							return Validators[validator.key](validator.value)
						}
					})
					: [];
			group[control.key] = new FormControl({ value: control.value || '', disabled: control.disabled }, validators);
		});
		return new FormGroup(group);
	}
}
