import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.services';
import { Store, StoreFeatureModule, StoreModule } from '@ngrx/store';
import { toggleMenu } from '../../../store/menu/menu.action';
import { Observable } from 'rxjs';
import { SideMenuComponent } from '../side-menu/side-menu.component';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    MatListModule,
    CommonModule,
    MatIconModule,
    StoreFeatureModule,
    SideMenuComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  // isMenuOpen:any;

  isOpen$!: Observable<boolean>;
  isOpen: any;

  constructor(private store: Store<{ isOpen: boolean }>) {
    this.store.select('isOpen').subscribe((isOpen) => {
      console.log('🚀 ~ NavBarComponent ~ constructor ~ isOpen:', this.isOpen);
      this.isOpen = isOpen;
      return (this.isOpen = this.isOpen?.isOpen);
    });
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.store.dispatch(toggleMenu());
    // console.log("🚀 ~ NavBarComponent ~ isOpen$:",this.isOpen$)
    console.log('Menu is open toggle:', this.isOpen);
  }
}
