import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControlBase } from 'src/app/models/form/form-control.model';
// import { CatalogoService } from 'src/app/services/catalogo/catalogo.service';
// import { obtenerCatalogoSuccess } from 'src/app/store/actions/catalogos.actions';
// import { AppState } from 'src/app/store/app.reducers';

@Component({
	selector: 'app-form-control',
	templateUrl: './form-control.component.html',
	styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit, OnDestroy {
	@Input() form: FormGroup;
	@Input() control: FormControlBase<string>;

	formSubs: Subscription;

	appearance: 'standard' | 'field' | 'outline' = 'outline';
	floatLabel: 'always' | 'auto' = 'auto';
	color: 'primary' | 'secondary' | 'accent' = 'primary';

	filteredOptions: Observable<any>;
	isLoading: boolean = true;

	autocomplete: FormControl = new FormControl('');

	catalogues: any = {
		'compania': [],
		'area': [],
		'subarea': [],
		'grupo': [],
		'rol': [],
		'fuente': [],
		'estatus': [],
		'grupoFuente': [],
		'configuracion': []
	}

	catalogoSubscription: Subscription;

	constructor() { }

	get required() {
		return this.form.controls[this.control.key].errors &&
			this.form.controls[this.control.key].errors.required;
	}

	get requiredLabel() {
		return this.control.validators.find(validator => validator.key === 'required').label
	}

	get pattern() {
		return this.form.controls[this.control.key].errors &&
			this.form.controls[this.control.key].errors.pattern;
	}

	get patternLabel() {
		return this.control.validators.find(validator => validator.key === 'pattern').label
	}

	get maxlength() {
		return this.form.controls[this.control.key].errors &&
			this.form.controls[this.control.key].errors.maxlength;
	}

	get maxlengthLabel() {
		return this.control.validators.find(validator => validator.key === 'maxLength').label
	}

	get minlength() {
		return this.form.controls[this.control.key].errors &&
			this.form.controls[this.control.key].errors.minlength;
	}

	get minlengthLabel() {
		return this.control.validators.find(validator => validator.key === 'minLength').label
	}

	ngOnInit(): void {
		if (this.control.controlType === 'select') {
			this.filteredOptions = this.autocomplete.valueChanges
				// this.filteredOptions = this.form.controls[this.control.key].valueChanges
				.pipe(
					startWith(''),
					map(value => typeof value === 'string' ? value : value.value),
					map(value => value ? this._filter(value) : this.catalogues[this.control.key].slice())
				);
		}
		this.getCatalogos();
	}

	ngOnDestroy(): void {
	}

	displayFn = (option: any) => {
		return option && option.value ? option.value : this.catalogues[this.control.key].find(opt => opt.key === option) ? this.catalogues[this.control.key].find(opt => opt.key === option).value : '';
	}

	private _filter(value: string): { key: string, value: string }[] {
		const filterValue = value.toLowerCase();

		// return this.control.options.filter(option => option.value.toLowerCase().indexOf(filterValue) === 0);
		return this.catalogues[this.control.key].filter(option => option.value.toLowerCase().indexOf(filterValue) === 0);
	}

	getCatalogos(): void {
		switch (this.control.key) {
			case 'compania':
				this.isLoading = true;
				// this.catalogoSubscription = this.store.select('catalogos').subscribe(({ compania }) => {
				// 	if (compania.loaded) {
				// 		this.catalogues[this.control.key] = compania.options;
				// 		this.isLoading = false;
				// 	}
				// });
				break;
			case 'area':
				// this.catalogoSubscription = this.store.select('catalogos').subscribe(({ area }) => {
				// 	if (area.loaded) {
				// 		this.catalogues[this.control.key] = area.options;
				// 		this.isLoading = false;
				// 	}
				// });
				break;
			case 'subarea':
				this.isLoading = false;
				// this.catalogoSubscription = this.store.select('catalogos').subscribe(({ subarea }) => {
				// 	if (subarea.loaded) {
				// 		this.catalogues[this.control.key] = subarea.options;
				// 		this.isLoading = false;
				// 	}
				// });
				break;
			case 'rol':
				// this.catalogoSubscription = this.store.select('catalogos').subscribe(({ rol }) => {
				// 	if (rol.loaded) {
				// 		this.catalogues[this.control.key] = rol.options;
				// 		this.isLoading = false;
				// 	}
				// });
				this.isLoading = false;
				// })
				break;
			case 'fuente':
				// this.catalogoSubscription = this.store.select('catalogos').subscribe(({ tipo_fuente }) => {
				// 	if (tipo_fuente.loaded) {
				// 		if (this.control.hasDependency) {
				// 			// TODO Revisar el caso de subarea
				// 		}
				// 		else {
				// 			this.catalogues[this.control.key] = tipo_fuente.options.map(tf => tf.suboptions).flat();
				// 		}
				// 		this.isLoading = false;
				// 	}
				// });
				break;
			case 'estatus':
				// this.catalogoSubscription = this.store.select('catalogos').subscribe(({ estatus }) => {
				// 	if (estatus.loaded) {
				// 		this.catalogues[this.control.key] = estatus.options;
				// 		this.isLoading = false;
				// 	}
				// });
				break;

			default:
				break;
		}
	}

	/**
	 * @description Funcion para asignar el valor de la opcion seleccionada de un componente autocomplete
	 * @param option Opcion seleccionada
	 */
	onAutocompleteOptionSelected(option: any): void {
		this.form.get(this.control.key).setValue(option);
	}

	/**
	 * @description Funcion para obtener los catalogos dependientes
	 * @param option Opcion seleccionada
	 */
	onOptionSelected(option: any): void {
		switch (this.control.key) {
			case 'area':
				const value = this.form.get(this.control.key).value;
				this.form.get('subarea').reset();
				if (value) {
					const subareas = this.catalogues[this.control.key].find(area => area.key === value || area.key === value.key).suboptions;
					// this.store.dispatch(obtenerCatalogoSuccess({ catalogo: 'subarea', options: subareas }))
				}
				else {
					// this.store.dispatch(obtenerCatalogoSuccess({ catalogo: 'subarea', options: [] }))
				}
				break;

			default:
				break;
		}
	}

}
