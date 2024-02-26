import { Component } from '@angular/core';
import { Store, StoreFeatureModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggleMenu } from '../../../store/menu/menu.action';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    StoreFeatureModule,
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  isOpen$!: Observable<boolean>;
  isOpen: any;

  constructor(
    private store: Store<{ isOpen: boolean }>,
    private router: Router
  ) {
    this.store.select('isOpen').subscribe((isOpen) => {
      // console.log('🚀 ~ NavBarComponent ~ constructor ~ isOpen:', this.isOpen);
      this.isOpen = isOpen;
      return (this.isOpen = this.isOpen?.isOpen);
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.store.dispatch(toggleMenu());
      }
    });
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.store.dispatch(toggleMenu());
    // console.log("🚀 ~ NavBarComponent ~ isOpen$:",this.isOpen$)
    // console.log('Menu is open toggle:', this.isOpen);
  }
}
