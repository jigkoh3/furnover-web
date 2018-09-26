import { Component, Input } from '@angular/core';

/**
 * Generated class for the MessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'message',
  templateUrl: 'message.html',
  styleUrls: ['./message.scss']
})
export class MessageComponent {
  @Input() type: string = '';
  @Input() message: string = '';

  constructor() {
    // console.log('Hello MessageComponent Component');
  }

}
