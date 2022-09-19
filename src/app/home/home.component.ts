import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empolyees=[{name:"Praveen", designation:"Manager", Salary:10000},
{name:"Raju", designation:"Asst Manager", Salary:20000},
{name:"ramprasad", designation:"Engineer", Salary:25000},
{name:"Swathi", designation:"Sr Engineer", Salary:25000},
{name:"vasinavi", designation:"Asst Manager", Salary:25000}
]
  constructor() { }
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

  


