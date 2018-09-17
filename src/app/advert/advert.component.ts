import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css'],
  providers: [NgbCarouselConfig]
})
export class AdvertComponent implements OnInit {

  _id: number;
  title;
  data;
  description;
  images = [];
  phn;
  city;
  constructor(private route: ActivatedRoute, private http: HttpClient, config: NgbCarouselConfig) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._id = params['_id'];
      this.http.get(`http://localhost:3000/api/advert/getAdvertById?_id=${this._id}`).subscribe(res => {
        this.data = JSON.stringify(res);
        this.data = JSON.parse(this.data);
        this.title = this.data.title;
        this.description = this.data.description;
        this.images = this.data.photos;
        this.city = this.data.city;
        for (let i=0; i<this.images.length;i++){
          this.images[i] = "http://localhost:3000/".concat(this.images[i]);
        }
        this.phn = this.data.userphonenumber;
      });
  });
  }
}
