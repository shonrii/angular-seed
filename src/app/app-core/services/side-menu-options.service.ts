import { Injectable } from '@angular/core';
import { SideMenus } from './side-menus';

@Injectable()
export class SideMenuOptionsService {

  getMenuOptions(path: string) {
    const split = path.split('/');
    switch (split[1]) {
      case 'home': return SideMenus.USER_ADMIN
      default: return SideMenus.DEFAULT;
    }
  }

}
