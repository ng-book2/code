/*
 * PinControls: a component that holds the controls for a particular pin 
 */
import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { NgIf } from '@angular/common';
import { Pin } from 'interestAppNg1';

@Component({
  selector: 'pin-controls',
  template: `
<div class="controls">
  <div class="heart">
    <a (click)="toggleFav()">
      <img src="/images/icons/Heart-Empty.png" *ngIf="!pin.faved" />
      <img src="/images/icons/Heart-Red.png"   *ngIf="pin.faved" />
    </a>
  </div>
</div>
  `
})
export class PinControlsComponent {
  @Input() pin: Pin;
  @Output() faved: EventEmitter<Pin> = new EventEmitter<Pin>();

  toggleFav(): void {
    this.faved.next(this.pin);
  }
}

