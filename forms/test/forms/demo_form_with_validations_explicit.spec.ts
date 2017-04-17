import {
  TestBed,
  ComponentFixture,
  fakeAsync
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DemoFormWithValidationsExplicit
} from '../../app/ts/forms/demo_form_with_validations_explicit';
import {
  dispatchEvent,
  ConsoleSpy
} from '../util';

describe('DemoFormWithValidationsExplicit', () => {
  let el, input, form;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ DemoFormWithValidationsExplicit ]
    });
  });

  function createComponent(): ComponentFixture<any> {
    let fixture = TestBed.createComponent(DemoFormWithValidationsExplicit);
    el = fixture.debugElement.nativeElement;
    input = fixture.debugElement.query(By.css('input')).nativeElement;
    form = fixture.debugElement.query(By.css('form')).nativeElement;
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
  }));

  it('displays no errors when sku has a value', fakeAsync( () => {
    let fixture = createComponent();
    input.value = 'ABC';
    dispatchEvent(input, 'input');
    fixture.detectChanges();

    let msgs = el.querySelectorAll('.ui.error.message');
    expect(msgs.length).toEqual(0);
  }));
});
