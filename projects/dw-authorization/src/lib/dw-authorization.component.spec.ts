import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwAuthorizationComponent } from './dw-authorization.component';

describe('DwAuthorizationComponent', () => {
  let component: DwAuthorizationComponent;
  let fixture: ComponentFixture<DwAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
