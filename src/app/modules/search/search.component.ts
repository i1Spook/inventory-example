import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{

  }
}

// import { HttpClient } from '@angular/common/http'; 
// import { Observable } from 'rxjs';

// @Injectable()
// export class AppSettingsService {

//   constructor(private http: HttpClient) {
//        this.getJSON().subscribe(data => {
//           console.log(data);
//        });
//   }

//    public getJSON(): Observable<any> {
//         return this.http.get("assets/DPMDeviceDB.json");
//   }
// }


// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.scss']
// })
// export class SearchComponent implements OnInit {

//   constructor(
//     private appSettingsService : AppSettingsService 
// ) { }

//   ngOnInit(){
//     this.appSettingsService.getJSON().subscribe(data => {
//           console.log(data);
//       });
//   }
// }
