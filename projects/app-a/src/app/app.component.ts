import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedBadgeComponent } from '../../../shared-ui/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedBadgeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-a';
  onButtonClick() {
    console.log('button clicke');
  }
}
