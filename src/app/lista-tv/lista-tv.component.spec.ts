import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTvComponent } from './lista-tv.component';

describe('ListaTvComponent', () => {
  let component: ListaTvComponent;
  let fixture: ComponentFixture<ListaTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
