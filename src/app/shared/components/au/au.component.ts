import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Icountr } from '../../model/interface';

@Component({
  selector: 'app-au',
  templateUrl: './au.component.html',
  styleUrls: ['./au.component.scss']
})
export class AuComponent implements OnInit {
  auArray: any = [];
  constructor(private _countrysrevice: CountryService) { }

  ngOnInit(): void {
    this.auArray = this._countrysrevice.getalldata('AU');

  }
}
