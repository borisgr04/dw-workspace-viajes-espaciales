import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConsultaUsuariosComponent } from './modal-consulta-usuarios.component';

describe('ModalConsultaUsuariosComponent', () => {
  let component: ModalConsultaUsuariosComponent;
  let fixture: ComponentFixture<ModalConsultaUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConsultaUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConsultaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
