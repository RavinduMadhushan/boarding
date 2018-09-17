import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PageEvent, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  districts;
  selectedd = "All";
  length_;
  count: number;
  items;
  noResults = true;
  constructor(private http: HttpClient) {

    let head = new HttpHeaders();
    head.append('Access-Control-Allow-Origin', '*');

    this.http.get("http://localhost:3000/getcities", { headers: head }).subscribe(res => {
      this.districts = res;
      this.selectedd = this.districts[0];
    });

    this.http.get("http://localhost:3000/api/advert/length", { headers: head }).subscribe(res => {
      this.length_ = res;

      this.count = this.length_.value;
      length = this.count;
      this.noResults = true;
      if (length !== 0) {
        this.noResults = false;
      }
    });

    this.http.get("http://localhost:3000/api/advert/getAll?pagesize=10&pagenumber=1&city=All", { headers: head }).subscribe(res => {
      this.items = res;
    });

  }

  ngOnInit() { }

  list = "2";

  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  newpage = 0;
  pageIndex = 0;

  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  handlepage(event?: PageEvent) {
    this.newpage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.http.get(`http://localhost:3000/api/advert/getAll?pagesize=${this.pageSize}&pagenumber=${this.newpage}`).subscribe(res => {
      this.items = res;
    });
  }

  selectionChange(value) {
    this.http.get(`http://localhost:3000/api/advert/getAllByCity?pagesize=${this.pageSize}&pagenumber=${1}&city=${this.selectedd}`).subscribe(res => {
      this.items = res;
    });
    this.paginator.pageIndex = 0;
    this.http.get(`http://localhost:3000/api/advert/lengthByCity?city=${value}`).subscribe(res => {
      this.length_ = res;

      this.count = this.length_.value;
      this.noResults = true;
      length = this.count;
      if (length !== 0) {
        this.noResults = false;
      }
    });
  }



}
