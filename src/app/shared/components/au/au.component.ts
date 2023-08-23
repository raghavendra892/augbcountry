import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Icountr } from '../../model/interface';

@Component({
  selector: 'app-au',
  templateUrl: './au.component.html',
  styleUrls: ['./au.component.scss']
})
export class AuComponent implements OnInit {
  auArray : any = [];
  constructor(private _countrysrevice : CountryService) { }

  ngOnInit(): void {
    //this.auArray = this._countrysrevice.getalldata()
//this.auArray.filter(((ele: { countryCode: string; }) => ele.countryCode === "AU"));
    
   // this.auArray = this._countrysrevice.getalldata().filter(ele => ele.countryCode === "AU")
   this.auArray = this._countrysrevice.getalldata('AU');
  
   
    
  }

}
