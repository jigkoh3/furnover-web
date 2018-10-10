import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-modal-select-product",
  templateUrl: "./modal-select-product.component.html",
  styleUrls: ["./modal-select-product.component.scss"]
})
export class ModalSelectProductComponent implements OnInit {
  datas: Array<any> = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public paramiter: any,
    public dialogRef: MatDialogRef<ModalSelectProductComponent>
  ) {
    this.datas = paramiter.products;
  }

  ngOnInit() {}

  onSelectedProductEmit(event) {
    this.datas = event;
  }

  onCloseModel() {
    this.dialogRef.close();
  }

  onConfirmProducts() {
    this.dialogRef.close(this.datas);
  }
}
