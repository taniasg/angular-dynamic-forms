import { Directive, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
	selector: '[appForm]'
})
export class FormDirective {
	@Input() form: FormGroup;

	constructor() { }

}
