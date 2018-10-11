import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMyCodeComponent } from './info-my-code.component';

describe('InfoMyCodeComponent', () => {
  let component: InfoMyCodeComponent;
  let fixture: ComponentFixture<InfoMyCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMyCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
