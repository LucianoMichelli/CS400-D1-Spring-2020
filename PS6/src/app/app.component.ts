import { Component } from '@angular/core';
import data from '../assets/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PPS6';
  public artistList: {name: string}[] = data;

}
