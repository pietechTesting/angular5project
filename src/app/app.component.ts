import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  masonryItems = [
    { title: 'assets/images/pic6.jpeg' },
    { title: 'assets/images/image2.jpeg' },
    { title: 'assets/images/images3.jpeg' },
    { title: 'assets/images/images4.jpeg' },
    { title: 'assets/images/images5.jpeg' },
  ]
}
