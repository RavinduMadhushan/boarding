import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadModule, FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-postad',
  templateUrl: './postad.component.html',
  styleUrls: ['./postad.component.css']
})
export class PostadComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3000/api/advert/new', itemAlias: 'photos' });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }

  onSubmit(details) {
    console.log(details);
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('title', 'tharindu');
    };
    this.uploader.uploadAll();
  }



}
