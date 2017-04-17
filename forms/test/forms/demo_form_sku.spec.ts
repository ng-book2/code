import {
  TestBed,
  ComponentFixture,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { DemoFormSku } from '../../app/ts/forms/demo_form_sku';
import {
  dispatchEvent,
  ConsoleSpy
} from '../util';

describe('DemoFormSku Component', () => {
  let originalConsole, fakeConsole;
  let el, input, form;
  
  beforeEach(() => {
    // replace the real window.console with our spy
    fakeConsole = new ConsoleSpy();
    originalConsole = window.console;
    (<any>window).console = fakeConsole;

    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ DemoFormSku ]
    });
  });

  // restore real console
  afterAll(() => (<any>window).console = originalConsole);

  function createComponent(): ComponentFixture<any> {
    let fixture = TestBed.createComponent(DemoFormSku);
    el = fixture.debugElement.nativeElement;
    input = fixture.debugElement.query(By.css('input')).nativeElement;
    form = fixture.debugElement.query(By.css('form')).nativeElement;
    fixture.detectChanges();

    return fixture;
  }

  it('logs the submitted value', fakeAsync(() => {
    let fixture = createComponent();
    input.value = 'MY-SKU';

    dispatchEvent(input, 'input');
    fixture.detectChanges();
    tick();

    fixture.detectChanges();
    dispatchEvent(form, 'submit');
    tick();

    expect(fakeConsole.logs).toContain('you submitted value: [object Object]');
  }));

});
