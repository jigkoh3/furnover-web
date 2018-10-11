import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCodeComponent } from './my-code.component';

describe('MyCodeComponent', () => {
  let component: MyCodeComponent;
  let fixture: ComponentFixture<MyCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
