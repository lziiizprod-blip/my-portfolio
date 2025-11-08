import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosPortraits } from './photos-portraits';

describe('PhotosPortraits', () => {
  let component: PhotosPortraits;
  let fixture: ComponentFixture<PhotosPortraits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosPortraits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosPortraits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
