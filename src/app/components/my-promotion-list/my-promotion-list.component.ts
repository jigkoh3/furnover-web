import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { ModalConfirmComponent } from 'src/app/pages/modals/modal-confirm/modal-confirm.component';
import { ModalCompleteComponent } from 'src/app/pages/modals/modal-complete/modal-complete.component';

@Component({
    selector: 'app-my-promotion-list',
    templateUrl: './my-promotion-list.component.html',
    styleUrls: ['./my-promotion-list.component.css']
})
export class MyPromotionListComponent implements OnInit {
    @Input() data: any = {};
    @Input() itemStatus: any = {};
    @Output() outputData = new EventEmitter();
    // data: Array<any> = [];

    dateLimited: any;

    constructor(
        public iconRegistry: MatIconRegistry,
        public dialog: MatDialog,
        public sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'del',
            sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/icons/del.svg'));
    }

    ngOnInit() {
        this.getData();
        this.dateLimit();
        this.changeData(true)
        // console.log(this.itemStatus);
        // console.log(this.data)
        if (this.itemStatus === 'end') {
            this.data.products.forEach(products => {
                products.prices.forEach(prices => {

                    if (prices) {
                        prices.isuse = false;
                    }

                });
            });
        }
    }
    getData() {
        // console.log(this.data);
        // const respone = {
        //   datas: [
        //     {
        //       name: 'เสื้อผ้า',
        //       limitsell: '0',
        //       img: 'https://doublegoose.com/wp-content/uploads/2014/03/doublegoose-crewneck-333n-bl.png',
        //       prices: [{
        //         oldprice: '130',
        //         newprice: '100',
        //         discount: '10',
        //         choice: true,
        //         namechoice: 'เสื้อสีดำ'
        //       }, {
        //         oldprice: '130',
        //         newprice: '100',
        //         discount: '10',
        //         choice: true,
        //         namechoice: 'เสื้อสีดำ'
        //       }]
        //     }
        //   ]
        // };
        // this.data = respone.datas;
    }

    checkQty(item) {
        if (item.qty) {
            const dataQty = item.qty.toString();
            if (dataQty.length >= 4) {
                const sub = dataQty.substring(0, 4);
                item.qty = parseInt(sub);
            }
        }

    }
    changeData(e) {
        // console.log(e);
        if (e) {
            if (this.dateLimited >= 1 || this.itemStatus === "soon" || !this.itemStatus) {
                // console.log('1')
                // console.log(this.data.products);
                this.data.products.forEach(product => {
                    let countIsuse: any = 0;
                    product.prices.forEach(price => {
                        if (price.isuse) {
                            countIsuse++;
                        }
                    });
                    if (countIsuse === 1) {
                        const filers = product.prices.filter(el => {
                            return el.isuse === true;
                        });
                        filers[0].forceDisable = true;
                    } else {
                        product.prices.forEach(el => {
                            if (el.forceDisable) {
                                el.forceDisable = false;
                            }
                        });
                    }
                });
            } else {
                // console.log('1.2')
                // this.data.products[i].prices[j].isuse = false;
            }
        } else {
            if (this.dateLimited >= 1 || this.itemStatus === "soon" || !this.itemStatus) {
                // console.log('2')
                // console.log(this.data.products);
                this.data.products.forEach(product => {
                    let countIsuse: any = 0;
                    product.prices.forEach(price => {
                        if (price.isuse) {
                            countIsuse++;
                        }
                    });
                    if (countIsuse === 1) {
                        const filers = product.prices.filter(el => {
                            return el.isuse === true;
                        });
                        filers[0].forceDisable = true;
                    } else {
                        product.prices.forEach(el => {
                            if (el.forceDisable) {
                                el.forceDisable = false;
                            }
                        });
                    }
                });
            } else {
                // console.log('2.2')
                // setTimeout(() => {
                //     this.data.products[i].prices[j].isuse = true;
                // }, 100);
            }
        }

        this.outputData.emit(this.data);
    }

    swapPrice(e, priceType, indexProduct, index, item) {
        if (priceType === 'cash') {
            if (item.newprice < item.price) {
                const percentByprice = Math.round((item.price - item.newprice) / item.price * 100);
                this.data.products[indexProduct].prices[index].percentage = parseFloat(percentByprice.toString()).toFixed(0);
            } else if (item.newprice >= item.price) {
                item.newprice = item.price - 1;
                item.percentage = 0;

            }
        } else if (priceType === 'percent') {
            if (item.percentage < 100) {
                const priceBypercent = Math.round((item.price * item.percentage) / 100);
                this.data.products[indexProduct].prices[index].newprice = item.price - priceBypercent;
            } else if (item.percentage >= 100) {
                item.percentage = 99;
            } else if (item.percentage <= 0) {
                item.percentage = 1;
            }
        } else {
            item.percentage = 0;
            item.newprice = item.price - 1;
        }
        this.outputData.emit(this.data);
    }


    checkNumNewprice(e, i, j) {
        const reg = new RegExp('^[0-9]+$');
        if (e < 0 || !reg.test(e)) {
            setTimeout(() => {
                this.data.products[i].prices[j].newprice = undefined;
            }, 100);
        }
    }


    checkNumMax(e, i, j) {
        const reg = new RegExp('^[0-9]+$');
        if (e < 0 || !reg.test(e)) {
            setTimeout(() => {
                this.data.products[i].prices[j].percentage = undefined;
            }, 100);
        }
    }




    // swapPrice(e, priceType, indexProduct, index, price) {
    //     if (priceType === 'cash') {
    //         const percentByprice = Math.round((price - e) / price * 100);
    //         this.data.products[indexProduct].prices[index].percentage = parseFloat(percentByprice.toString()).toFixed(0);
    //     } else if (priceType === 'percent') {
    //         const priceBypercent = Math.round((price * e) / 100);
    //         this.data.products[indexProduct].prices[index].newprice = price - priceBypercent;
    //     }
    //     this.outputData.emit(this.data);
    // }


    delProduct(i): void {
        const dialogRef = this.dialog.open(ModalConfirmComponent, {
            width: '500px',
            data: { message: 'ยืนยันการลบสินค้า' }
        });
        dialogRef.afterClosed().subscribe(async result => {
            // console.log(`Dialog closed: ${result}`);
            const deleteCat = result;
            if (deleteCat === 'confirm') {
                this.data.products.splice(i, 1);
                this.dialog.open(ModalCompleteComponent, {
                    width: '700px',
                    data: { message: 'การลบสินค้าสำเร็จ' }
                });
            }
        });
    }

    dateLimit() {
        const now: any = new Date();
        const createDate: any = new Date(this.data.created);
        const hours = Math.abs(now - createDate) / 36e5;
        // console.log(hours);
        this.dateLimited = hours;
    }

}
