import { Router } from '@angular/router';
import { FileUploaderCustom } from './../customfileuploader';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadModule, FileUploader, FileUploaderOptions } from 'ng2-file-upload';

@Component({
  selector: 'app-postad',
  templateUrl: './postad.component.html',
  styleUrls: ['./postad.component.css']
})
export class PostadComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
    this.http.get("http://localhost:3000/getcities").subscribe(res => {
      console.log(res);
      this.cities = JSON.parse(JSON.stringify(res));
    });
  }

  length = 0;
  error = false;
  errorText = '';

  cities;

  //public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3000/api/advert/new', itemAlias: 'photos' });
  public uploader: FileUploaderCustom = new FileUploaderCustom({ url: 'http://localhost:3000/api/advert/new' });
  ngOnInit() {

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
      length = this.uploader.queue.length;
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      if (status == 200) {
        let id: String = "" + JSON.parse(response).publishedAt;
        this.router.navigate(['/advert_success', id]);
      }
      else {
        this.error = true;
        this.errorText = response;
      }
    };
  }

  onSubmit(details) {
    let title: String = details.title;
    let tags = details.title;
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('title', details.title);
      form.append('description', details.description);
      form.append('institute', details.institute);
      form.append('city', details.city);
      form.append('username', details.username);
      form.append('useremail', details.useremail);
      form.append('userphonenumber', details.userphonenumber);
      form.append('tags', tags);
    };
    var uo: FileUploaderOptions = {};
    uo.headers = [{ name: 'Access-Control-Allow-Origin', value: 'http://localhost:4200' }]
    this.uploader.setOptions(uo);
    this.uploader.uploadAllFiles();
  }
  valid() {
    if (length === 5) {
      return true;
    }
    return false;
  }

}
