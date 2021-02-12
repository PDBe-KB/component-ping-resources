import {TestBed, async} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {PingComponent} from './ping/ping.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PingComponent
      ],
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
