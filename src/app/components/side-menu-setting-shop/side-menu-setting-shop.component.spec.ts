import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuSettingShopComponent } from './side-menu-setting-shop.component';

describe('SideMenuSettingShopComponent', () => {
  let component: SideMenuSettingShopComponent;
  let fixture: ComponentFixture<SideMenuSettingShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuSettingShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuSettingShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
