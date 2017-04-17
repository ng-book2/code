/*
 * AddPinComponent: a component that controls the "add pin" page
 */
import {
  Component,
  Inject
} from '@angular/core';
import { Pin, PinsService } from 'interestAppNg1';
import { IStateService } from 'angular-ui-router';

@Component({
  selector: 'add-pin',
  templateUrl: '/templates/add-ng2.html'
})
export class AddPinComponent {
  saving: boolean = false;
  newPin: Pin;

  constructor(@Inject('PinsService') private pinsService: PinsService,
              @Inject('$state') private uiState: IStateService) {
    this.newPin = this.makeNewPin();
  }

  makeNewPin(): Pin {
    return {
      title: 'Steampunk Cat',
      description: 'A cat wearing goggles',
      user_name: 'me',
      avatar_src: 'images/avatars/me.jpg',
      src: '/images/pins/cat.jpg',
      url: 'http://cats.com',
      faved: false,
      id: Math.floor(Math.random() * 10000).toString()
    };
  }

  onSubmit(): void {
    this.saving = true;
    console.log('submitted', this.newPin);
    setTimeout(() => {
      this.pinsService.addPin(this.newPin).then(() => {
        this.newPin = this.makeNewPin();
        this.saving = false;
        this.uiState.go('home');
      });
    }, 2000);
  }
}

