import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Input } from 'src/app/models/form/controls/input.model';
import { Select } from 'src/app/models/form/controls/select.model';
import { Autocomplete } from 'src/app/models/form/controls/autocomplete.model';
import { Checkbox } from 'src/app/models/form/controls/checkbox.model';
import { MultiSelect } from 'src/app/models/form/controls/multi-select.model';
import { Datepicker } from 'src/app/models/form/controls/datepicker.model';
import { FormControlBase } from 'src/app/models/form/form-control.model';
import { patterns } from 'src/configs/patterns';
import { Textarea } from 'src/app/models/form/controls/textarea.model';
import { Radio } from 'src/app/models/form/controls/radio.model';

@Injectable({
	providedIn: 'root'
})
export class FormService {

	constructor() { }

	getBusquedaUsuarioForm() {
		const busquedaUsuarioForm: FormControlBase<string>[] = [
			new Select({
				key: 'compania',
				label: 'Companía',
				placeholder: 'Selecciona una opción',
				type: 'text',
				value: null,
				class: "col-md-3 col-sm-12",
				order: 1,
				options: [],
				optionKey: true,
				showEmptyOption: true,
				emptyOptionLabel: 'Mostrar todos'
			}),

			new Select({
				key: 'area',
				label: 'Área',
				placeholder: 'Selecciona una opción',
				type: 'text',
				value: null,
				class: "col-md-3 col-sm-12",
				order: 2,
				options: [],
				optionKey: true,
				showEmptyOption: true,
				emptyOptionLabel: 'Mostrar todos'
			}),
			new Select({
				key: 'subarea',
				label: 'Subárea',
				placeholder: 'Selecciona una opción',
				type: 'text',
				value: null,
				class: "col-md-3 col-sm-12",
				order: 3,
				options: [],
				optionKey: true,
				showEmptyOption: true,
				hasDependency: true,
				emptyOptionLabel: 'Mostrar todos'
			}),
			new Select({
				key: 'grupo',
				label: 'Grupo',
				placeholder: 'Selecciona una opción',
				type: 'text',
				value: '',
				class: "col-md-3 col-sm-12",
				order: 4,
				disabled: true,
				options: [],
				optionKey: true,
				showEmptyOption: true,
				emptyOptionLabel: 'Mostrar todos'
			}),
			new Select({
				key: 'fuente',
				label: 'Fuente',
				placeholder: 'Selecciona una opción',
				type: 'text',
				value: '',
				class: "col-md-3 col-sm-12",
				order: 5,
				options: [],
				optionKey: true,
				showEmptyOption: true,
				emptyOptionLabel: 'Mostrar todos'
			}),
			new Select({
				key: 'rol',
				label: 'Rol',
				placeholder: 'Selecciona una opción',
				type: 'text',
				value: '',
				class: "col-md-3 col-sm-12",
				order: 6,
				options: [],
				optionKey: true,
				showEmptyOption: true,
				emptyOptionLabel: 'Mostrar todos'
			}),
			new Select({
				key: 'estatus',
				label: 'Estatus',
				placeholder: 'Selecciona una opción',
				type: 'text',
				value: '',
				class: "col-md-3 col-sm-12",
				order: 7,
				options: [],
				optionKey: true,
				showEmptyOption: true,
				emptyOptionLabel: 'Mostrar todos'
			}),
			new Input({
				key: 'otro',
				label: 'Búsqueda por nombre o correo',
				placeholder: 'Escribe un nombre o correo',
				value: '',
				class: "col-md-3 col-sm-12",
				order: 8,
				optionKey: true,
				showEmptyOption: true,
				emptyOptionLabel: 'Mostrar todos'
			})
		]

		return of(busquedaUsuarioForm.sort((a, b) => a.order - b.order));
	}

	getUsuarioForm() {
		const usuarioForm: FormControlBase<string>[] = [
			new Input({
				key: 'nombre',
				label: 'Nombre',
				placeholder: 'Escribe tu nombre',
				value: '',
				required: true,
				validators: [
					{
						key: 'required',
						value: true,
						label: 'Escribe tu nombre'
					},
					{
						key: 'pattern',
						value: patterns.alphanumeric,
						label: 'Por favor escribe un nombre sin caracteres especiales. Puedes usar acentos y la ñ'
					},
					{
						key: 'maxLength',
						value: 25,
						label: 'El nombre no debe contener más de 25 caracteres'
					}
				],
				class: "col-md-6 col-sm-12",
				order: 1
			}),
			new Input({
				key: 'segundoNombre',
				label: 'Segundo nombre (opcional)',
				placeholder: 'Escribe tu nombre',
				validators: [
					{
						key: 'pattern',
						value: patterns.alphanumeric,
						label: 'Por favor escribe un nombre sin caracteres especiales. Puedes usar acentos y la ñ'
					},
					{
						key: 'maxLength',
						value: 25,
						label: 'El nombre no debe contener más de 25 caracteres'
					}
				],
				type: 'text',
				class: "col-md-6 col-sm-12",
				order: 2
			}),
			new Input({
				key: 'apellidoPaterno',
				label: 'Apellido Paterno',
				placeholder: 'Apellido paterno',
				value: '',
				required: true,
				validators: [
					{
						key: 'required',
						value: true,
						label: 'Escribe un apellido'
					},
					{
						key: 'pattern',
						value: patterns.alphanumeric,
						label: 'Por favor escribe un apellido sin caracteres especiales. Puedes usar acentos y la ñ'
					},
					{
						key: 'maxLength',
						value: 25,
						label: 'El apellido paterno no debe contener más de 25 caracteres'
					}
				],
				class: "col-md-6 col-sm-12",
				order: 3
			}),
			new Input({
				key: 'apellidoMaterno',
				label: 'Apellido Materno (opcional)',
				placeholder: 'Apellido materno',
				value: '',
				validators: [
					{
						key: 'pattern',
						value: patterns.alphanumeric,
						label: 'Por favor escribe un apellido sin caracteres especiales. Puedes usar acentos y la ñ'
					},
					{
						key: 'maxLength',
						value: 25,
						label: 'El apellido materno no debe contener más de 25 caracteres'
					}
				],
				class: "col-md-6 col-sm-12",
				order: 4
			}),
			new Input({
				key: 'correo',
				label: 'Correo',
				placeholder: 'ejemplo: jperez@mail.com',
				type: 'email',
				value: '',
				required: true,
				class: "col-md-6 col-sm-12",
				validators: [
					{
						key: 'required',
						value: true,
						label: 'Escribe un correo'
					},
					{
						key: 'pattern',
						value: patterns.email,
						label: 'Por favor escribe un email válido. Recuerda incluir un signo "@" en el correo electrónico'
					},
					{
						key: 'maxLength',
						value: 100,
						label: 'El correo no debe contener más de 100 caracteres'
					}
				],
				order: 5
			}),
			new Select({
				key: 'compania',
				label: 'Companía',
				placeholder: 'Selecciona una opción',
				type: 'text',
				value: '',
				required: true,
				class: "col-md-6 col-sm-12",
				validators: [
					{
						key: 'required',
						value: true,
						label: 'Selecciona una companía'
					}
				],
				order: 6,
				options: [
				]
			}),
			new Select({
				key: 'area',
				label: 'Área',
				placeholder: 'Selecciona un área',
				type: 'text',
				value: '',
				required: true,
				class: "col-md-6 col-sm-12",
				validators: [
					{
						key: 'required',
						value: true,
						label: 'Selecciona una companía'
					}
				],
				order: 7,
				options: [
				]
			}),
			new Select({
				key: 'subarea',
				label: 'Subárea',
				placeholder: 'Selecciona una subárea',
				type: 'text',
				value: '',
				required: true,
				class: "col-md-6 col-sm-12",
				validators: [
					{
						key: 'required',
						value: true,
						label: 'Selecciona una companía'
					}
				],
				order: 8,
				options: [
				],
				hasDependency: true
			}),
			// new Datepicker({
			// 	key: 'fechaInicio',
			// 	label: 'Desde',
			// 	placeholder: 'ejemplo',
			// 	type: 'date',
			// 	value: '',
			// 	required: true,
			// 	class: "col-md-6 col-sm-12",
			// 	validators: [
			// 		{
			// 			key: 'required',
			// 			value: true,
			// 			label: 'Escribe un correo'
			// 		}
			// 	],
			// 	order: 7
			// }),
			// new Textarea({
			// 	key: 'comentarios',
			// 	label: 'Comentarios',
			// 	placeholder: 'ejemplo',
			// 	type: 'text',
			// 	value: '',
			// 	required: true,
			// 	class: "col-md-6 col-sm-12",
			// 	validators: [
			// 		{
			// 			key: 'required',
			// 			value: true,
			// 			label: 'Escribe un correo'
			// 		}
			// 	],
			// 	order: 8
			// }),
			// new Checkbox({
			// 	key: 'obligatorio',
			// 	label: 'Obligatorio',
			// 	type: 'text',
			// 	value: '',
			// 	required: true,
			// 	class: "col-md-6 col-sm-12",
			// 	validators: [
			// 		{
			// 			key: 'required',
			// 			value: true,
			// 			label: 'Escribe un correo'
			// 		}
			// 	],
			// 	order: 8
			// }),
			new Select({
				key: 'rol',
				label: 'Rol',
				placeholder: 'Selecciona una opción',
				type: 'text',
				value: '',
				required: true,
				class: "col-md-6 col-sm-12",
				validators: [
					{
						key: 'required',
						value: true,
						label: 'Selecciona una companía'
					}
				],
				order: 9,
				options: []
			}),
			new Select({
				key: 'grupoFuente',
				label: 'Grupo de fuente (opcional)',
				placeholder: 'Selecciona un grupo de fuente',
				type: 'text',
				value: '',
				required: true,
				class: "col-md-6 col-sm-12",
				disabled: true,
				validators: [	],
				order: 10,
				options: []
			}),
			// new Radio({
			// 	key: 'obligatorio',
			// 	label: 'Obligatorio',
			// 	placeholder: 'Selecciona una opción',
			// 	type: 'text',
			// 	value: '',
			// 	required: true,
			// 	class: "col-md-6 col-sm-12",
			// 	validators: [
			// 		{
			// 			key: 'required',
			// 			value: true,
			// 			label: 'Selecciona una companía'
			// 		}
			// 	],
			// 	order: 11,
			// 	options: [
			// 		{ key: '1', value: 'Sí', checked: true },
			// 		{ key: '2', value: 'No' },
			// 	]
			// }),
		];

		return of(usuarioForm.sort((a, b) => a.order - b.order));
	}

	getFileUploadForm() {
		const fileUploadForm: FormControlBase<string>[] = [
			new Select({
				key: 'configuracion',
				label: 'Configuración',
				placeholder: 'Selecciona una opción',
				value: '',
				required: true,
				validators: [
					{
						key: 'required',
						value: true,
						label: 'Selecciona una configuración'
					}
				],
				class: "col-md-12 col-sm-12",
				order: 1,
				options: [
				]
			}),
			new Textarea({
				key: 'comentarios',
				label: 'Comentarios (opcional)',
				placeholder: 'Escribe un comentario',
				type: 'text',
				value: '',
				required: true,
				class: "col-md-12 col-sm-12",
				validators: [
					{
						key: 'maxLength',
						value: 100,
						label: 'El comentario no debe contener más de 100 caracteres'
					}
				],
				order: 2
			})
		];

		return of(fileUploadForm.sort((a, b) => a.order - b.order));
	}

}
