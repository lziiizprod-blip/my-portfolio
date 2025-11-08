import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosPfe } from './photos-pfe';

describe('PhotosPfe', () => {
  let component: PhotosPfe;
  let fixture: ComponentFixture<PhotosPfe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosPfe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosPfe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
