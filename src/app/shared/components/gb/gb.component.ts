import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-gb',
  templateUrl: './gb.component.html',
  styleUrls: ['./gb.component.scss']
})
export class GbComponent implements OnInit {

  GbArray : any = [];
  constructor(private _countrysrevice : CountryService) { }

  ngOnInit(): void {
 
    
    this.GbArray = this._countrysrevice.getalldata().filter(ele => ele.countryCode === "GB")
  
   
    
  }
}
