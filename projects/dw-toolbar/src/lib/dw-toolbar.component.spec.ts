import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwToolbarComponent } from './dw-toolbar.component';

describe('DwToolbarComponent', () => {
  let component: DwToolbarComponent;
  let fixture: ComponentFixture<DwToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
