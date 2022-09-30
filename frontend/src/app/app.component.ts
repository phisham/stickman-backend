import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'stickman-frontend';
  
  constructor(private http:HttpClient){

  }
  ngOnInit(): void{
    
  }

  
}
