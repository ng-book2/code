import {
  TestBed,
  fakeAsync,
  inject
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { DemoFormNgModel } from '../../app/ts/forms/demo_form_ng_model';

describe('DemoFormNgModel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ DemoFormNgModel ]
    });
  });

  it('requires product name', fakeAsync((tcb) => {
    let fixture = TestBed.createComponent(DemoFormNgModel);
    let comp = fixture.debugElement.componentInstance;
    let el = fixture.debugElement.nativeElement;

    // error message is displayed when product name is empty
    comp.productName = '';
    fixture.detectChanges();
    expect(el.querySelector('.ui.error.message').innerHTML)
      .toContain('Form is invalid');

    // error message is not present when product name has a value
    comp.productName = 'something';
    fixture.detectChanges();
    expect(el.querySelector('.ui.error.message')).toBeNull();
  }));
});
