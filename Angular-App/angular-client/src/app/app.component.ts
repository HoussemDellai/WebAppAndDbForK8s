import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  products: string[];

  constructor(private http: Http) { }

  getProducts(): string[] {

    this.http.get('api/SampleData/WeatherForecasts').subscribe(result => {
      this.products = result.json() as string[];
    }, error => console.error(error));  
    
    return this.products;
  }
}
