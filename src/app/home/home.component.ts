import { Component, OnInit } from '@angular/core';
import { BioComponent } from '../bio/bio.component';
import { AllergiesComponent } from '../allergies/allergies.component';
import { RecordComponent } from '../record/record.component';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { Observable } from 'rxjs';
import { Store, StoreFeatureModule } from '@ngrx/store';
import { CommonModule, NgClass } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BioComponent,
    // StoreFeatureModule,
    CommonModule,
    SideMenuComponent,
    NgClass,
    AllergiesComponent,
    RecordComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent{
  isOpen$!: Observable<boolean>;
  isOpen: any;

  constructor(private store: Store<{ isOpen: boolean }>) {
    this.store.select('isOpen').subscribe((isOpen) => {
      // console.log('🚀 ~ NavBarComponent ~ constructor ~ isOpen:', this.isOpen);
      this.isOpen = isOpen;
      return (this.isOpen = this.isOpen?.isOpen);
    });
  }

  // ngOnInit(): void {}

//   toggleMenu() {
//     this.store.dispatch(toggleMenu());
//     // console.log("🚀 ~ NavBarComponent ~ isOpen$:",this.isOpen$)
//     console.log('Menu is open toggle:', this.isOpen);
//   }
}
