import { MatPaginator, PageEvent } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) {
    let head = new HttpHeaders();
    head.append('Access-Control-Allow-Origin', '*');

    this.http.get("http://localhost:3000/api/advert/lengthNotApproved", { headers: head }).subscribe(res => {
      this.length_ = res;

      this.count = this.length_.value;
      length = this.count;
      this.noResults = true;
      if (length !== 0) {
        this.noResults = false;
      }
    });

    this.http.get("http://localhost:3000/api/advert/getAllNotApproved?pagesize=10&pagenumber=1&city=All", { headers: head }).subscribe(res => {
      this.items = res;
    });


  }

  districts;
  selectedd = "All";
  length_;
  count: number;
  items;
  noResults = true;

  ngOnInit() {
  }

  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  newpage = 0;
  pageIndex = 0;

  handlepage(event?: PageEvent) {
    this.newpage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.http.get(`http://localhost:3000/api/advert/getAllNotApproved?pagesize=${this.pageSize}&pagenumber=${this.newpage}`).subscribe(res => {
      this.items = res;
    });
  }
  pageEvent: PageEvent;
  approve(id) {
    this.http.get(`http://localhost:3000/api/advert/approve?_id=${id}`).subscribe(res => {

    });

    let head = new HttpHeaders();
    head.append('Access-Control-Allow-Origin', '*');

    this.http.get("http://localhost:3000/api/advert/lengthNotApproved", { headers: head }).subscribe(res => {
      this.length_ = res;

      this.count = this.length_.value;
      length = this.count;
      this.noResults = true;
      if (length !== 0) {
        this.noResults = false;
      }
    });

    this.http.get("http://localhost:3000/api/advert/getAllNotApproved?pagesize=10&pagenumber=1&city=All", { headers: head }).subscribe(res => {
      this.items = res;
    });
    this.paginator.pageIndex = 0;
  }


}
