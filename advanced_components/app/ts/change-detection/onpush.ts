import { 
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';


class Profile {
  constructor(private first: string, private last: string) {}

  lastChanged() {
    return new Date();
  }
}

@Component({
  selector: 'default',
  template: `
  <h4 class="ui horizontal divider header">
    Default Strategy
  </h4>

  <form class="ui form">
    <div class="field">
      <label>First Name</label>
      <input
        type="text"
        [(ngModel)]="profile.first"
        name="first"
        placeholder="First Name">
    </div>
    <div class="field">
      <label>Last Name</label>
      <input
        type="text"
        [(ngModel)]="profile.last"
        name="last"
        placeholder="Last Name">
    </div>
  </form>
  <div>
    {{profile.lastChanged() | date:'medium'}}
  </div>
  `
})
export class DefaultCmp {
  @Input() profile: Profile;
}

@Component({
  selector: 'on-push',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <h4 class="ui horizontal divider header">
    OnPush Strategy
  </h4>

  <form class="ui form">
    <div class="field">
      <label>First Name</label>
      <input
        type="text"
        [(ngModel)]="profile.first"
        name="first"
        placeholder="First Name">
    </div>
    <div class="field">
      <label>Last Name</label>
      <input
        type="text"
        [(ngModel)]="profile.last"
        name="last"
        placeholder="Last Name">
    </div>
  </form>
  <div>
    {{profile.lastChanged() | date:'medium'}}
  </div>
  `
})
export class OnPushCmp {
  @Input() profile: Profile;
}

@Component({
  selector: 'change-detection-sample-app',
  template: `
  <div class="ui page grid">
    <div class="two column row">
      <div class="column area">
        <default [profile]="profile1"></default>
      </div>
      <div class="column area">
        <on-push [profile]="profile2"></on-push>
      </div>
    </div>
  </div>
  `
})
export class OnPushChangeDetectionSampleApp {
  profile1: Profile = new Profile('Felipe', 'Coury');
  profile2: Profile = new Profile('Nate', 'Murray');
}


