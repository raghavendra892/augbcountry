import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-ra',
  templateUrl: './ra.component.html',
  styleUrls: ['./ra.component.scss']
})
export class RaComponent implements OnInit {

  raArray : any = [];
  constructor(private _countrysrevice : CountryService) { }

  ngOnInit(): void {
    this.raArray = this._countrysrevice.getalldata('RA');
  }

}
