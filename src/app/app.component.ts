import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit,OnDestroy{
  title = 'bikebox2023';
  constructor(){

  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    
  }
  ngOnDestroy(): void {
   
  }
}
