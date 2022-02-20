import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwLoginComponent } from './dw-login.component';

describe('DwLoginComponent', () => {
  let component: DwLoginComponent;
  let fixture: ComponentFixture<DwLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
