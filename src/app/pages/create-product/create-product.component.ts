import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  @ViewChild('productImg') productImg;
  productImgs: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  uploadImg() {
    this.productImg.nativeElement.click();
  }

  onImgChange(e) {
    const fileBrowser = this.productImg.nativeElement;
    const reader: any = new FileReader();
    reader.readAsDataURL(fileBrowser.files.length > 0 ? fileBrowser.files[0] : null);
    if (fileBrowser.files.length > 0) {
      reader.onload = () => {
        const base64: any = reader.result.replace(/\n/g, '');
        console.log(base64);
        this.productImgs.push(base64);
      };
    }
  }

}
