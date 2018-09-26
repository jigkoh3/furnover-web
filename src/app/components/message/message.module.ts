import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './message';

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [MessageComponent],
    exports: [MessageComponent]
})

export class MessageModule { }
