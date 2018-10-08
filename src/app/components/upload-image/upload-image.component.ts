import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';
// import { map } from 'rxjs/operators';
import { ClassUpload } from './class-upload';
import * as _ from "lodash";

@Component({
  selector: 'upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  uploadTask: any;
  uploadProgress: number;
  selectedFiles: FileList;
  currentUpload: ClassUpload;
  imageArray: any = [];
  private basePath: string = '/uploads';

  @Output() image: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new ClassUpload(files[idx]);
      this.pushUpload(this.currentUpload);
      // this.upSvc.pushUpload(this.currentUpload)
    })
  }

  pushUpload(upload: ClassUpload) {
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
          this.imageArray.push(downloadURL);
          this.image.emit(this.imageArray);
        })
      }
    );
  }

  // uploadImage(upload) {
  //   // const file: File = event.target.files[0];
  //   const storageRef = firebase.storage().ref();
  //   const fileRandom = Math.floor((Date.now() / 1000) + new Date().getUTCMilliseconds());
  //   let metadata = {
  //     contentType: 'image/png',
  //   };
  //   this.uploadTask = storageRef.child(`images/${upload.name + fileRandom}.png`).put(upload.file, metadata);
  //   // this.uploadState = uploadTask.snapshotChanges().pipe(map(s => s.state));
  //   this.uploadTask.on('state_changed', (snapshot) => {
  //     this.uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     this.uploadProgress = JSON.parse(this.uploadProgress.toFixed(0));

  //     // console.log('Upload is ' + this.uploadProgress + '% done');
  //     switch (snapshot.state) {
  //       case firebase.storage.TaskState.PAUSED: // or 'paused'
  //         // console.log('Upload is paused');
  //         break;
  //       case firebase.storage.TaskState.RUNNING: // or 'running'
  //         // console.log('Upload is running');
  //         break;
  //     }
  //   }, (err) => {
  //     // console.log(err);
  //   }, (success) => {
  //     this.uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
  //       console.log('File available at', downloadURL);
  //       this.image.emit(downloadURL);
  //     })
  //   });
  // }

}
