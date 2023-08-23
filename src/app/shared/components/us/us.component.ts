import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {
  
  usArray : any = [];
  constructor(private _countrysrevice : CountryService) { }

  ngOnInit(): void {
 
    
    this.usArray = this._countrysrevice.getalldata('US');
  
   
    
  }

}
