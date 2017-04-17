import {LargeService} from './LargeService';
import {SmallService} from './SmallService';

export class ViewPortService {
  determineService(): any {
    let w: number = Math.max(document.documentElement.clientWidth,
                             window.innerWidth || 0);

    if (w < 800) {
      return new SmallService();
    }
    return new LargeService();
  }
}
