import {
  TestBed,
  ComponentFixture,
  fakeAsync
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { dispatchEvent } from '../util';
import { By } from '@angular/platform-browser';
import {
  DemoFormWithCustomValidations
} from '../../app/ts/forms/demo_form_with_custom_validations';

describe('DemoFormWithCustomValidations', () => {
  var el, input, form;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ DemoFormWithCustomValidations ]
    });
  });

  function createComponent(): ComponentFixture<any> {
    let fixture = TestBed.createComponent(DemoFormWithCustomValidations);
    el = fixture.debugElement.nativeElement;
    input = fixture.debugElement.query(By.css("input")).nativeElement;
    form = fixture.debugElement.query(By.css("form")).nativeElement;
    fixture.detectChanges();

    return fixture;
  }

  it('displays errors with no sku', fakeAsync( () => {
    let fixture = createComponent();
    input.value = '';
    dispatchEvent(input, 'input');
    fixture.detectChanges();

    let msgs = el.querySelectorAll('.ui.error.message');
    expect(msgs[0].innerHTML).toContain('SKU is invalid');
    expect(msgs[1].innerHTML).toContain('SKU is required');
    expect(msgs[2].innerHTML).toContain('SKU must begin with <span>123</span>');
    expect(msgs[3].innerHTML).toContain('Form is invalid');
  }));

  it('removes the required error when sku has a value', fakeAsync( () => {
    let fixture = createComponent();
    input.value = 'ABC';
    dispatchEvent(input, 'input');
    fixture.detectChanges();

    let msgs = el.querySelectorAll('.ui.error.message');
    expect(msgs[0].innerHTML).toContain('SKU is invalid');
    expect(msgs[1].innerHTML).toContain('SKU must begin with <span>123</span>');
    expect(msgs[2].innerHTML).toContain('Form is invalid');
  }));

  it('removes all errors when sku starts with 123', fakeAsync( () => {
    let fixture = createComponent();
    input.value = '123ABC';
    dispatchEvent(input, 'input');
    fixture.detectChanges();

    let msgs = el.querySelectorAll('.ui.error.message');
    expect(msgs.length).toEqual(0);
  }));
});
