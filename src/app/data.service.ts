import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {




  constructor( private http: HttpClient) { }

  getUserdetails1(){
    return this.http.get("jsonplaceholder.typicode.com/users");
  }
  
  


  facalityData(){
    return [
    {"facultyId":101,"facultyName":"Vivek","facultyMobile":"9998887771","facultyEmail":"vivek@abc.com","highestQualification":"Dr","workLocation":"Mysore"},
    {"facultyId":102,"facultyName":"Pridhvi","facultyMobile":"6668887772","facultyEmail":"pridhvi@abc.com","highestQualification":"Dr","workLocation":"Bangalore"},
    {"facultyId":103,"facultyName":"Patrick","facultyMobile":"8889997773","facultyEmail":"patrick@abc.com","highestQualification":"ME","workLocation":"Mysore"},
    {"facultyId":104,"facultyName":"Rajesh","facultyMobile":"9988987674","facultyEmail":"rajesh@abc.com","highestQualification":"ME","workLocation":"Bangalore"},
    {"facultyId":105,"facultyName":"Bhargav","facultyMobile":"9898785671","facultyEmail":"bhargav@abc.com","highestQualification":"ME","workLocation":"Bangalore"},
    {"facultyId":106,"facultyName":"Ajay","facultyMobile":"8978187541","facultyEmail":"ajay@abc.com","highestQualification":"ME","workLocation":"Hyderabad"},
    {"facultyId":107,"facultyName":"Bharath","facultyMobile":"7876527713","facultyEmail":"bharath@abc.com","highestQualification":"ME","workLocation":"Bangalore"},
    {"facultyId":108,"facultyName":"Thiruppathi","facultyMobile":"9894147084","facultyEmail":"thiruppathi@abc.com","highestQualification":"ME","workLocation":"Mysore"}
    ]}



  }
  

