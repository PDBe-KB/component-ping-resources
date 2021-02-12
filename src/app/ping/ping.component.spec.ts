import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PingComponent } from './ping.component';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('PingComponent', () => {
  let component: PingComponent;
  let fixture: ComponentFixture<PingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingComponent);
    component = fixture.componentInstance;
    component.pingUrlData = [{'resourceName': 'PDBe-KB', 'url': 'https://www.pdbe-kb.org'}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
