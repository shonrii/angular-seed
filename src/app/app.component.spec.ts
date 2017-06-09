import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MdSidenavModule, MdToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AuthService } from './auth-core/services/auth.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const authServiceStub = {
      isLoggedIn: true
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterModule,
        MdSidenavModule,
        MdToolbarModule,
      ],
      providers: [
        { provide: AuthService, useValue: authServiceStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
