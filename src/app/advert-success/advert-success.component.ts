import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert-success',
  templateUrl: './advert-success.component.html',
  styleUrls: ['./advert-success.component.css']
})
export class AdvertSuccessComponent implements OnInit {

  advert_id;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.advert_id = params['id'];
    });
  }

  ngOnInit() {
  }

}
