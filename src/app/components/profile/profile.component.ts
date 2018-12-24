import { Component, OnInit } from '@angular/core';
import { MatDialog, MatIconRegistry } from '@angular/material';
import { Constants } from '../../app.constants';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { DataService } from '../../providers/data-service/data.service';

//Image
import * as firebase from 'firebase';
import { ClassUpload } from '../upload-image/class-upload';
import * as _ from "lodash";
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalMessageComponent } from '../../pages/modals/modal-message/modal-message.component';
import { ModalCompleteComponent } from 'src/app/pages/modals/modal-complete/modal-complete.component';
import { DomSanitizer } from '@angular/platform-browser';
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
  logImage: any = [];

  imageLoader: boolean = true;

  shop: any = {
    images: [
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
    public dataService: DataService,
    private spinner: NgxSpinnerService,
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'shopDetail',
      sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/icons/detailShop_icon.svg'));
  }

  ngOnInit() {
    this.getProfile();
  }

  async getProfile() {
    this.spinner.show();
    this.shopUser = window.localStorage.getItem(Constants.URL() + '@user') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@user')) : null;
    try {
      let data: any = await this.restApi.get(Constants.URL() + '/api/shop/' + this.shopUser.shop_id);
      this.shop = data.data;
      this.spinner.hide();
      if (this.shop.coverimage && this.shop.coverimage.url) {
        this.imageLoader = false;
      }
      // console.log(this.shop);
    } catch (error) {
      this.spinner.hide();
      this.dataService.error("โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }

  async submit() {
    this.spinner.show();

    if (this.logImage && this.logImage.length > 0) {
      for (let index = 0; index < this.logImage.length; index++) {
        let storageRef = firebase.storage().refFromURL(this.logImage[index]);
        storageRef.delete();
      }
      this.logImage = [];
    }

    this.shopUser = window.localStorage.getItem(Constants.URL() + '@user') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@user')) : null;
    try {
      let data: any = await this.restApi.put(Constants.URL() + '/api/shop/' + this.shopUser.shop_id, this.shop);
      this.spinner.hide();
      if (data['status'] === 200) {
        this.getProfile();
        this.dialog.open(ModalCompleteComponent, {
          width: '700px',
          data: { message: 'บันทึกข้อมูลร้านค้าสำเร็จ' }
        });
      }
      // if (data['status'] === 200) {
      //   this.getProfile();
      //   this.dataService.success('บันทึกข้อมูลสำเร็จ');
      //   setTimeout(() => {
      //     this.dataService.success('');
      //   }, 2000);
      // }
    } catch (error) {
      this.spinner.hide();
      this.dataService.error("บันทึกข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }

  // async updateImgProfile(image) {
  // let user = window.localStorage.getItem(Constants.URL() + '@user') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@user')) : null;
  // console.log(user.profileImageURL);
  // user.profileImageURL = image;
  // try {
  // let data: any = await this.restApi.put(Constants.URL() + '/api/user/' + user._id, user);
  // if (data['status'] === 200) {
  //   this.shopUser.profileImageURL = user.profileImageURL;
  //   window.localStorage.setItem(Constants.URL() + '@user', JSON.stringify(data.data));
  //   this.dataService.success('บันทึกข้อมูลสำเร็จ');
  //   setTimeout(() => {
  //     this.dataService.success('');
  //   }, 2000);
  // }
  // } catch (error) {
  //   this.dataService.error("บันทึกข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
  // }
  // }

  //Image
  detectFiles(event, status) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.length >= 5) {
      let text: any = 'คุณสามารถอัพโหลดไฟล์ได้ไม่เกิน 5 ไฟล์';
      const dialogRef = this.dialog.open(ModalMessageComponent, {
        width: "500px",
        data: { message: text }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {

        }
      });
    } else {
      let checkArrayImage = 0;
      checkArrayImage = this.shop.images.length + this.selectedFiles.length;
      if (status === 'coverImg' || status === 'profileImg') {
        let files = this.selectedFiles
        let filesIndex = _.range(files.length)
        _.each(filesIndex, (idx) => {
          this.currentUpload = new ClassUpload(files[idx]);
          this.pushUpload(this.currentUpload, status);
          // this.upSvc.pushUpload(this.currentUpload)
        })
      } else {
        if (checkArrayImage > 5) {
          let text: any = 'คุณสามารถอัพโหลดไฟล์ได้ไม่เกิน 5 ไฟล์';
          const dialogRef = this.dialog.open(ModalMessageComponent, {
            width: "500px",
            data: { message: text }
          });

          dialogRef.afterClosed().subscribe(result => {
            if (result) {

            }
          });
        } else {
          let files = this.selectedFiles
          let filesIndex = _.range(files.length)
          _.each(filesIndex, (idx) => {
            this.currentUpload = new ClassUpload(files[idx]);
            this.pushUpload(this.currentUpload, status);
            // this.upSvc.pushUpload(this.currentUpload)
          })
        }
      }
    }

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
                this.imageArray.forEach(image => {
                  this.shop.images.push(image);
                });
              } else if (status === 'coverImg') {
                this.shop.coverimage = {
                  url: this.imageArray[0].url
                }
                this.submit();
              } else if (status === 'profileImg') {
                this.shop.profileimage = {
                  url: this.imageArray[0].url
                }
                this.submit();
                // this.updateImgProfile(this.imageArray[0].url);
              }
              // this.image.emit(this.imageArray);
            }
          }
        })
      }
    );
  }
  //Image

  deleteImage(item) {
    // let storageRef = firebase.storage().refFromURL(item.url);
    // storageRef.delete();
    this.logImage.push(item.url);
    let index = this.shop.images.indexOf(item, 0);
    if (index > -1) {
      this.shop.images.splice(index, 1);
    }
  }

}
