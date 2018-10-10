import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-modal-select-product",
  templateUrl: "./modal-select-product.component.html",
  styleUrls: ["./modal-select-product.component.css"]
})
export class ModalSelectProductComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalSelectProductComponent>
  ) {
    console.log(data);
  }

  ngOnInit() {}

  closeModel() {
    this.dialogRef.close();
  }
}
