import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUploadYoutubeComponent } from './modal-upload-youtube.component';

describe('ModalUploadYoutubeComponent', () => {
  let component: ModalUploadYoutubeComponent;
  let fixture: ComponentFixture<ModalUploadYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUploadYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUploadYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
