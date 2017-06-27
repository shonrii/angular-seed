import { TestBed, inject } from '@angular/core/testing';

import { SideMenuOptionsService } from './side-menu-options.service';

describe('SideMenuOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideMenuOptionsService]
    });
  });

  it('should be created', inject([SideMenuOptionsService], (service: SideMenuOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
