import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoShopCategoryComponent } from './info-shop-category.component';

describe('InfoShopCategoryComponent', () => {
  let component: InfoShopCategoryComponent;
  let fixture: ComponentFixture<InfoShopCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoShopCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoShopCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
