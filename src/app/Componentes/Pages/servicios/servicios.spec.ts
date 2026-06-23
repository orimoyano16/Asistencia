import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosFuncionalidades } from './servicios-funcionalidades';

describe('ServiciosFuncionalidades', () => {
  let component: ServiciosFuncionalidades;
  let fixture: ComponentFixture<ServiciosFuncionalidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosFuncionalidades],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiciosFuncionalidades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
