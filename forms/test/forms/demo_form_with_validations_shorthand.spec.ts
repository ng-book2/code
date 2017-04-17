import {
  TestBed,
  fakeAsync,
  inject,
  tick,
  ComponentFixture
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DemoFormWithValidationsShorthand
} from '../../app/ts/forms/demo_form_with_validations_shorthand';
import {
  dispatchEvent,
  ConsoleSpy
} from '../util';

describe('DemoFormWithValidationsShorthand', () => {
  let originalConsole, fakeConsole;
  let el, input, form;

  beforeEach(() => {
    // replace the real window.console with our spy
    fakeConsole = new ConsoleSpy();
    originalConsole = window.console; 
    (<any>window).console = fakeConsole;

    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ DemoFormWithValidationsShorthand ]
    });
  });

  // restore real console
  afterAll(() => (<any>window).console = originalConsole);

  function createComponent(): ComponentFixture<any> {
    let fixture = TestBed.createComponent(DemoFormWithValidationsShorthand);
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

    // no value on sku field, all error messages are displayed
    let msgs = el.querySelectorAll('.ui.error.message');
    expect(msgs[0].innerHTML).toContain('SKU is invalid');
    expect(msgs[1].innerHTML).toContain('SKU is required');
  }));

  it('displays no errors when sku has a value', fakeAsync( () => {
    let fixture = createComponent();
    input.value = 'XYZ';
    dispatchEvent(input, 'input');
    fixture.detectChanges();

    let msgs = el.querySelectorAll('.ui.error.message');
    expect(msgs.length).toEqual(0);
  }));

  it('logs the correct form value to console', fakeAsync( () => {
    let fixture = createComponent();
    input.value = 'XYZ';
    dispatchEvent(input, 'input');
    tick();

    fixture.detectChanges();
    dispatchEvent(form, 'submit');
    tick();

    expect(fakeConsole.logs).toContain('you submitted value: XYZ');
  }));

});
