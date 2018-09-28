import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMarketingComponent } from './menu-marketing.component';

describe('MenuMarketingComponent', () => {
  let component: MenuMarketingComponent;
  let fixture: ComponentFixture<MenuMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
