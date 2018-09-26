import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLinear = true; // set true for required field
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstnameCtrl: ['', Validators.required],
      lastnameCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      emailCtrl: ['', [
        Validators.required,
        Validators.email,
      ]]
    });
    this.thirdFormGroup = this._formBuilder.group({
      usernameCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      passwordCtrl: ['', Validators.required],
      passwordconfirmCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      shopnameCtrl: ['', Validators.required],
    });
  }
  done() {
    
  }

}
