import {
  TestBed,
  ComponentFixture,
  fakeAsync,
  tick
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DemoFormWithEvents } from '../../app/ts/forms/demo_form_with_events';
import {
  dispatchEvent,
  ConsoleSpy
} from '../util';

describe('DemoFormWithEvents', () => {
  let originalConsole, fakeConsole;
  let el, input, form;

  beforeEach(() => {
    // replace the real window.console with our spy
    fakeConsole = new ConsoleSpy();
    originalConsole = window.console;
    (<any>window).console = fakeConsole;

    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ DemoFormWithEvents ]
    });
  });

  // restores the real console
  afterAll(() => (<any>window).console = originalConsole);

  function createComponent(): ComponentFixture<any> {
    let fixture = TestBed.createComponent(DemoFormWithEvents);
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

  it('handles sku value changes', fakeAsync( () => {
    let fixture = createComponent();
    input.value = 'XYZ';
    dispatchEvent(input, 'input');
    tick();

    expect(fakeConsole.logs).toContain('sku changed to: XYZ');
  }));

  it('handles form changes', fakeAsync(() => {
    let fixture = createComponent();
    input.value = 'XYZ';
    dispatchEvent(input, 'input');
    tick();

    expect(fakeConsole.logs).toContain('form changed to: [object Object]');
  }));

  it('handles form submission', fakeAsync((tcb) => {
    let fixture = createComponent();
    input.value = 'ABC';
    dispatchEvent(input, 'input');
    tick();

    fixture.detectChanges();
    dispatchEvent(form, 'submit');
    tick();

    expect(fakeConsole.logs).toContain('you submitted value: ABC');
  }));

});
