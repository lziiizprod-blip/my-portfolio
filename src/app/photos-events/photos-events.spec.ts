import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosEvents } from './photos-events';

describe('PhotosEvents', () => {
  let component: PhotosEvents;
  let fixture: ComponentFixture<PhotosEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosEvents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
