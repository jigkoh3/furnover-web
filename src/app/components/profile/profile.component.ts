import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Constants } from '../../app.constants';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { DataService } from '../../providers/data-service/data.service';

//Image
import * as firebase from 'firebase';
import { ClassUpload } from '../upload-image/class-upload';
import * as _ from "lodash";
//Image
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileSettingComponent implements OnInit {
  //Image
  uploadTask: any;
  uploadProgress: number;
  selectedFiles: FileList;
  currentUpload: ClassUpload;
  imageArray: any = [];
  private basePath: string = '/uploads';
  //Image

  shop: any = {
    images: [
      // { url: '', }
    ],
    logistics: [],
    coverimage: {}
  };
  shopUser: any = {
    roles: [],
    shop: {
      images: [],
      logistics: []
    }
  };
  constructor(
    public dialog: MatDialog,
    public restApi: RestApiService,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  async getProfile() {
    this.shopUser = window.localStorage.getItem(Constants.URL() + '@usershop') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;
    try {
      let data: any = await this.restApi.get(Constants.URL() + '/api/shop/' + this.shopUser.shop_id);
      this.shop = data.data;
      console.log(this.shop);
    } catch (error) {
      this.dataService.error("โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }

  async submit() {
    this.shopUser = window.localStorage.getItem(Constants.URL() + '@usershop') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;
    try {
      let data: any = await this.restApi.put(Constants.URL() + '/api/shop/' + this.shopUser.shop_id, this.shop);
      if (data['status'] === 200) {
        this.dataService.success('บันทึกข้อมูลสำเร็จ');
        setTimeout(() => {
          this.dataService.success('');
        }, 2000);
      }
    } catch (error) {
      this.dataService.error("บันทึกข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }

  async updateImgProfile(image) {
    let user = window.localStorage.getItem(Constants.URL() + '@usershop') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;
    console.log(user.profileImageURL);
    user.profileImageURL = image;
    try {
      let data: any = await this.restApi.put(Constants.URL() + '/api/user/' + user._id, user);
      if (data['status'] === 200) {
        this.shopUser.profileImageURL = user.profileImageURL;
        window.localStorage.setItem(Constants.URL() + '@usershop', JSON.stringify(data.data));
        this.dataService.success('บันทึกข้อมูลสำเร็จ');
        setTimeout(() => {
          this.dataService.success('');
        }, 2000);
      }
    } catch (error) {
      this.dataService.error("บันทึกข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }

  //Image
  detectFiles(event, status) {
    this.selectedFiles = event.target.files;
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new ClassUpload(files[idx]);
      this.pushUpload(this.currentUpload, status);
      // this.upSvc.pushUpload(this.currentUpload)
    })
  }

  pushUpload(upload: ClassUpload, status) {
    this.imageArray = [];
    let storageRef = firebase.storage().ref();
    const fileRandom = Math.floor((Date.now() / 1000) + new Date().getUTCMilliseconds());
    let uploadTask: any = storageRef.child(`images/${this.basePath}/${fileRandom + upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.uploadProgress = upload.progress;
        // console.log('Upload is ' + this.uploadProgress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            // console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            // console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // upload failed
        console.log(error);
      }, (success) => {
        // upload success
        // upload.url = uploadTask.snapshot.downloadURL
        // upload.name = upload.file.name
        // this.saveFileData(upload)
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.imageArray.push({ url: downloadURL });
          if (this.imageArray) {
            if (this.imageArray.length === this.selectedFiles.length) {
              // this.shop.images = this.imageArray;
              if (status === 'shopImg') {
                this.shop.images = this.imageArray;
              } else if (status === 'coverImg') {
                console.log(this.imageArray[0]);
                this.shop.coverimage = {
                  url: this.imageArray[0].url
                }
                this.submit();
              } else if (status === 'profileImg') {
                console.log(this.imageArray[0]);
                this.updateImgProfile(this.imageArray[0].url);
              }
              // this.image.emit(this.imageArray);
            }
          }
        })
      }
    );
  }
  //Image


}
