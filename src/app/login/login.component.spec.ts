import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterStub } from '../../testing/router-stubs';
import { AuthService } from '../core/services/auth.service';
import { LoginModule } from './login.module';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    const authServiceStub = {
      isLoggedIn: true
    };

    TestBed.configureTestingModule({
      imports: [LoginModule],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: Router, useClass: RouterStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
