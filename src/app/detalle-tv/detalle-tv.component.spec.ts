import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTVComponent } from './detalle-tv.component';

describe('DetalleTVComponent', () => {
  let component: DetalleTVComponent;
  let fixture: ComponentFixture<DetalleTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
