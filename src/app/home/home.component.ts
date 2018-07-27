import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  districts;
  selectedd;
  constructor(private http : HttpClient) {
    this.http.get("http://localhost:1234/getcities").subscribe(res => {
      console.log(res);
      this.districts = res;
      this.selectedd = this.districts[1].value;
    })
   }
  // districts = this.districtsv[0];
  //districts = [{ name : "Sri Lanka Institute for Information Technology", value : "sliit"} ];
  institutes = [{ name : "Sri Lanka Institute for Information Technology", value : "sliit"} ];
  
  //selectedi = this.institutes[0].value;
  

  
  ngOnInit() {
  }

  list="2";



 
}
