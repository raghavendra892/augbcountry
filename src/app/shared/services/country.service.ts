import { Injectable, OnInit } from '@angular/core';
import { input } from '../const/array';
import { Icountr } from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService implements OnInit {
  input: Array<Icountr> = [
    { id: 611, countryCode: "AU", venue: 'Pinjarra', date: 1692591360 },
    { id: 612, countryCode: "AU", venue: 'Pinjarra', date: 1692604800 },
    { id: 613, countryCode: "GB", venue: 'Redcliffe', date: 1692623100 },
    { id: 614, countryCode: "GB", venue: 'Brighton', date: 1692623100 },
    { id: 615, countryCode: "US", venue: 'Lingfield', date: 1692634200 },
    { id: 616, countryCode: "RA", venue: 'Philadelphia', date: 1692636000 },
    { id: 617, countryCode: "GB", venue: 'Landgrob', date: 1692626000 },
    ]
 

  getalldata(str: any){
   //return this.input
   return this.input.filter(ele => ele.countryCode === str)
  }
  constructor() {
    
    
   }
  ngOnInit(): void {
    const output = [];

const groupedByCountry = {};

// Group the input by countryCode
// for (const entry of input) {
//     const country_code = entry.countryCode;
//     if (!groupedByCountry[country_code]) {
//         groupedByCountry[country_code] = [];
//     }
//     groupedByCountry[country_code].push(entry);
// }

// // Create the nested output structure
// for (const country_code in groupedByCountry) {
//     const entries = groupedByCountry[country_code];
//     const venues = {};
//     for (const entry of entries) {
//         const venue_name = entry.venue;
//         if (!venues[venue_name]) {
//             venues[venue_name] = { venue: venue_name, data: [] };
//         }
//         venues[venue_name].data.push(entry);
//     }
//     const country_data = { id: entries[0].id, countryCode: country_code, venue: Object.values(venues) };
//     output.push(country_data);
// }

// console.log(output);
//   }
}
}
