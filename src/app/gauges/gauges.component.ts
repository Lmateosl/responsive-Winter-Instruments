import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gauges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gauges.component.html',
  styleUrl: './gauges.component.css'
})
export class GaugesComponent {
  items = Array.from({ length: 40 }, (_, index) => ({
    name: `Gauges PPR ${index + 1}`,
    image: 'https://www.yodify.com/cdn-cgi/image/quality=100,fit=scale-down,format=auto/https://images.yodify.com/productimages/WIKA/Model-732-51-Differential-Pressure-Gauge/BzPaE/8750229a-e0ac-4e8a-9d8e-bddc04e3c7eb/PIC-PR-732-31-732-51-de-de-48127-jpg.png' // Reemplaza con tu imagen
  }));
}
