import { DatePipe, isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    console.log('isPlatformServer', isPlatformServer(platformId));
  }
}
