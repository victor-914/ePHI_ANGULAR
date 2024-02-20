import { Component } from '@angular/core';
import { BioComponent } from '../bio/bio.component';
import { AllergiesComponent } from '../allergies/allergies.component';
import { RecordComponent } from '../record/record.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BioComponent, AllergiesComponent, RecordComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
