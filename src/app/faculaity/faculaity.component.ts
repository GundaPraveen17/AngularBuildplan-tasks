import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-faculaity',
  templateUrl: './faculaity.component.html',
  styleUrls: ['./faculaity.component.css']
})
export class FaculaityComponent implements OnInit {
facualitydetails:any;
  constructor(data:DataService) { 
    this.facualitydetails = data.facalityData();
  }

  ngOnInit(): void {
  }

}
