import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdetails:any;

  constructor(private dataservices:DataService) {}
  

  ngOnInit(): void {
    this.dataservices.getUserdetails1().subscribe(data =>{
      this.userdetails = data;
    })
  }

}
