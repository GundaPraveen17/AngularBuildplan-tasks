import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 



  ngOnInit(): void {
  }
  
quantity:number= 0;
value = 0;
i =0;


plus(){
  if(this.i !=100){
    this.i++;
    this.quantity = this.i; 
  }
  this.value  = this.i * 30;
}
minus(){
  if(this.i !=0){
    this.i--;
    this.quantity = this.i;  
  }
  this.value  = this.i * 30;
  }
}

  


