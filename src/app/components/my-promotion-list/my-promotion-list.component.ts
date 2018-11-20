import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

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
        public sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'del',
            sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/icons/del.svg'));
    }

    ngOnInit() {
        this.getData();
        this.dateLimit();
        console.log(this.itemStatus);
    }
    getData() {
        console.log(this.data);
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

    changeData(e, i, j) {
        console.log(e)
        if (e) {
            if (this.dateLimited >= 1 && this.itemStatus !== "end") {
                console.log('1')
                console.log(this.data.products);
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
                console.log('1.2')
                // this.data.products[i].prices[j].isuse = false;
            }
        } else {
            if (this.dateLimited >= 1) {
                console.log('2')
                console.log(this.data.products);
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
                console.log('2.2')
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
            }
        } else if (priceType === 'percent') {
            if (item.percentage < 100) {
                const priceBypercent = Math.round((item.price * item.percentage) / 100);
                this.data.products[indexProduct].prices[index].newprice = item.price - priceBypercent;
            } else if (item.percentage >= 100) {
                item.percentage = 99;
            } else if (item.percentage < 0) {
                item.percentage = 0;
            }
        } else {
            item.percentage = 0;
            item.newprice = item.price - 1;
        }
        this.outputData.emit(this.data);
    }



    // checkNumMax() {
    //     for (let i = 0; i < this.data.products.length; i++) {
    //         for (let idx = 0; idx < this.data.products[i].prices.length; idx++) {
    //             if (this.data.products[i].prices[idx].percentage) {
    //                 const txtpercentage = this.data.products[i].prices[idx].percentage.toString();
    //                 const txtRexg: any = txtpercentage.replace(/[&\/\\#,+()$~%.'":*?<>^{}\W_]/g, '');

    //                 setTimeout(() => {
    //                     this.data.products[i].prices[idx].percentage = txtRexg;
    //                     const reg = new RegExp('^[0-9]+$');
    //                     if (this.data.products[i].prices[idx].percentage < 0 || !reg.test(this.data.products[i].prices[idx].percentage)) {
    //                         setTimeout(() => {
    //                             this.data.products[i].prices[idx].percentage = '';
    //                         }, 100);
    //                     }
    //                 }, 80);
    //                 break;

    //             }

    //         }

    //     }

    // }




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

    delProduct(i) {
        const confirm = window.confirm('ยืนยันการลบสินค้า');
        if (confirm) {
            this.data.products.splice(i, 1);
        }
    }

    dateLimit() {
        const now: any = new Date();
        const createDate: any = new Date(this.data.created);
        const hours = Math.abs(now - createDate) / 36e5;
        console.log(hours);
        this.dateLimited = hours;
    }

}
