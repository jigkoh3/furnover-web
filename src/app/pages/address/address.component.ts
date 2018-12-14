import { Constants } from './../../app.constants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';
import { InfoAddressComponent } from '../modals/info-address/info-address.component';
import { DataService } from '../../providers/data-service/data.service';
import { DialogData } from '../modals/modal-prepare-shipping/modal-prepare-shipping.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  data: Array<any> = [];
  constructor(
    private router: Router,
    private restApi: RestApiService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getList();
  }

  async getList() {
    this.spinner.show();
    try {
      const usershop = window.localStorage.getItem(Constants.URL() + '@user') ?
        JSON.parse(window.localStorage.getItem(Constants.URL() + '@user')) : {};
      console.log(usershop._id);
      let res: any = await this.restApi.post(Constants.URL() + '/api/address-me', { user_id: usershop._id });
      if (res['status'] === 200) {
        this.data = res.datas;
        this.spinner.hide();
        console.log(res);
      }
    } catch (error) {
      this.spinner.hide();
      console.log(error);
    }
  }



  addClick(): void {
    const dialogRef = this.dialog.open(InfoAddressComponent, {
      width: "700px"
    });

    dialogRef.afterClosed().subscribe(result => {
       if (result) {
        this.getList();
      }
    });
  }
  clickEdit(item) :void{
    const dialogRef = this.dialog.open(InfoAddressComponent, {
      width: "700px",
      data: JSON.parse(JSON.stringify(item))

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getList();
      }
    });
  }


}

