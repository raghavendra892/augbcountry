import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newprojectTask';
  output = [
    {
      id: 611, countryCode: "AU", venue: [
        {
          venue: "Pinjarra", data: [
            { id: 611, countryCode: "AU", venue: 'Pinjarra', date: "1692591360" },
            { id: 612, countryCode: "AU", venue: 'Pinjarra', date: "1692604800" },
          ]
        },

      ]
    },
    {
      id: 613, countryCode: "GB", venue: [
        {
          venue: "Redcliffe", data: [
            { id: 613, countryCode: "GB", venue: 'Redcliffe', date: "1692623100" },
          ]
        },
        {
          venue: "Brighton", data: [
            { id: 614, countryCode: "GB", venue: 'Brighton', date: "1692623100" },
          ]
        },
        {
          venue: "Landgrob", data: [
            { id: 617, countryCode: "GB", venue: 'Landgrob', date: "1692626000" },
          ]
        }

      ]
    },
    {
      id: 615, countryCode: "US", venue: [
        {
          venue: "Lingfield", data: [
            { id: 615, countryCode: "US", venue: 'Lingfield', date: "1692634200" },
          ]
        },

      ]
    },
    {
      id: 616, countryCode: "RA", venue: [
        {
          venue: "Philadelphia", data: [
            { id: 616, countryCode: "RA", venue: 'Philadelphia', date: "1692636000" },
          ]
        },

      ]
    },

  ]




  input = [
    { id: 611, countryCode: "AU", venue: 'Pinjarra', date: "1692591360" },
    { id: 612, countryCode: "AU", venue: 'Pinjarra', date: "1692604800" },
    { id: 613, countryCode: "GB", venue: 'Redcliffe', date: "1692623100" },
    { id: 614, countryCode: "GB", venue: 'Brighton', date: "1692623100" },
    { id: 615, countryCode: "US", venue: 'Lingfield', date: "1692634200" },
    { id: 616, countryCode: "RA", venue: 'Philadelphia', date: "1692636000" },
    { id: 617, countryCode: "GB", venue: 'Landgrob', date: "1692626000" },
  ]


//     let au = input.filter((ele) => ele.countryCode === "AU");
// console.log(au);
// let arr = [];
// function daad() {
//   au.forEach((ele) => {
//     if ((ele) => ele.countryCode === "AU") {
//       arr.push({
//         id: au[0].id,
//         countryCode: ele.countryCode,
//         venue: [{ venue: ele.venue, data: au }],
//       });
//     }
//   });
//   return arr[arr.length - 1];
// }
// console.log(daad());
}
