import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';

// Services
import { FormControlService } from 'src/app/services/form/form-control/form-control.service';

// Componentes
import { FormControlComponent } from './form-control/form-control.component';

// Modules
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormDirective } from './form.directive';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
	declarations: [FormComponent, FormControlComponent, FormDirective],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatInputModule,
		MatSelectModule,
		MatAutocompleteModule,
		MatCheckboxModule,
		MatDatepickerModule,
		// MatNativeDateModule,
		MatRadioModule,
		MatProgressSpinnerModule,
		MatButtonModule
	],
	exports: [FormComponent],
	providers: [FormControlService]
})
export class FormModule { }
