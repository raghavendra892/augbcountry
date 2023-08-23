import { Injectable } from '@angular/core';
import { input } from '../const/array';
import { Icountr } from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  input: Array<Icountr> = [
    { id: 611, countryCode: "AU", venue: 'Pinjarra', date: 1692591360 },
    { id: 612, countryCode: "AU", venue: 'Pinjarra', date: 1692604800 },
    { id: 613, countryCode: "GB", venue: 'Redcliffe', date: 1692623100 },
    { id: 614, countryCode: "GB", venue: 'Brighton', date: 1692623100 },
    { id: 615, countryCode: "US", venue: 'Lingfield', date: 1692634200 },
    { id: 616, countryCode: "RA", venue: 'Philadelphia', date: 1692636000 },
    { id: 617, countryCode: "GB", venue: 'Landgrob', date: 1692626000 },
    ]
 

  getalldata(){
   return this.input
  }
  constructor() {
    
    
   }
}
