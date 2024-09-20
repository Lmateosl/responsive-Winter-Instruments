import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; // Para el sidenav
import { MatIconModule } from '@angular/material/icon'; // Para los íconos
import { MatListModule } from '@angular/material/list'; // Para las listas de navegación
import { MatToolbarModule } from '@angular/material/toolbar'; // Para la barra de herramientas
import { MatButtonModule } from '@angular/material/button'; // Para los botones
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true, 
  imports: [
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatToolbarModule, 
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  
}
