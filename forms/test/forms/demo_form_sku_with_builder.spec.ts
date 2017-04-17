import {
  TestBed,
  fakeAsync,
  inject,
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  DemoFormSkuBuilder
} from '../../app/ts/forms/demo_form_sku_with_builder';

describe('DemoFormSkuBuilder', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ DemoFormSkuBuilder ]
    });
  });

  it('initializes sku', fakeAsync((tcb) => {
    let fixture = TestBed.createComponent(DemoFormSkuBuilder);

    let comp = fixture.debugElement.componentInstance;
    let el = fixture.debugElement.nativeElement;

    fixture.detectChanges();

    // checks SKU on myForm
    expect(comp.myForm.controls.sku.value).toEqual('ABC123');

    // checks SKU on the input element
    expect(el.querySelector('form input').value).toEqual('ABC123');
  }));

});
