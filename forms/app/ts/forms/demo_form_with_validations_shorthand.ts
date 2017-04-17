import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'demo-form-with-validations-shorthand',
  template: `
<div class="ui raised segment">
  <h2 class="ui header">Demo Form: with validations (shorthand)</h2>
  <form [formGroup]="myForm"
        (ngSubmit)="onSubmit(myForm.value)"
        class="ui form">

    <div class="field"
      [class.error]="!myForm.get('sku').valid && myForm.get('sku').touched">
      <label for="skuInput">SKU</label>
      <input type="text"
             id="skuInput"
             placeholder="SKU"
             [formControl]="myForm.controls['sku']">
       <div *ngIf="!myForm.controls['sku'].valid"
         class="ui error message">SKU is invalid</div>
       <div *ngIf="myForm.controls['sku'].hasError('required')"
         class="ui error message">SKU is required</div>
    </div>

    <div *ngIf="!myForm.valid"
      class="ui error message">Form is invalid</div>

    <button type="submit" class="ui button">Submit</button>
  </form>
</div>
  `
})
export class DemoFormWithValidationsShorthand {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.required]
    });
  }

  onSubmit(value: any): void {
    console.log('you submitted value:', value.sku);
  }
}
