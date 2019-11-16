import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

vehicle:any;

  constructor( public service:DataService) { 
    this.getData();
  }

  getData(){

    this.service.getData().subscribe((res)=>{
      console.log(res);
      this.vehicle=res;
    })
  }
  ngOnInit() {
  }

}
