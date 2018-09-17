import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PageEvent } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-search-advert',
  templateUrl: './search-advert.component.html',
  styleUrls: ['./search-advert.component.css']
})
export class SearchAdvertComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }

  search: String[];
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  newpage = 0;
  pageIndex = 0;
  searchQuery = "";
  length_;
  count: number;
  items;
  noResults = true;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.search = params['query'];
      this.searchQuery = "";
      let s: String[] = JSON.parse(params['query']);
      for (let i = 0; i < s.length; i++) {
        this.searchQuery += " " + s[i];
      }
      let head = new HttpHeaders();
      head.append('Access-Control-Allow-Origin', '*');

      this.http.get(`http://localhost:3000/api/advert/searchlength?query=${this.search}`, { headers: head }).subscribe(res => {
        this.length_ = res;
        this.count = this.length_.value;
        length = this.count;
        this.noResults = true;
        if (length !== 0) {
          this.noResults = false;
        }
      });

      this.http.get(`http://localhost:3000/api/advert/search?pagesize=10&pagenumber=1&city=All&query=${this.search}`, { headers: head }).subscribe(res => {
        this.items = res;
      });



    });


  }

  handlepage(event?: PageEvent) {
    this.newpage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.http.get(`http://localhost:3000/api/advert/getAllNotApproved?pagesize=${this.pageSize}&pagenumber=${this.newpage}`).subscribe(res => {
      this.items = res;
    });
  }

}
