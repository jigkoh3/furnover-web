import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../app.constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';
import { InfoAddressComponent } from '../modals/info-address/info-address.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(
    private router: Router,
    private restApi: RestApiService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getList();
  }

  async getList() {
    this.spinner.show();
    try {
      const usershop = window.localStorage.getItem(Constants.URL() + '@usershop') ?
        JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : {};
      console.log(usershop._id);
      let res: any = await this.restApi.post(Constants.URL() + '/api/address-me', { user_id: usershop._id });
      if (res['status'] === 200) {
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
      console.log('The dialog was closed');
    });
  }
  clickEdit(){
    // this.router.navigate(['/create-student'], { queryParams: { data: JSON.stringify() } });
  }
}

