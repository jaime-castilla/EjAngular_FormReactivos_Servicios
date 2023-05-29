import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjPruebaFormReactivoComponent } from './ej-prueba-form-reactivo.component';

describe('EjPruebaFormReactivoComponent', () => {
  let component: EjPruebaFormReactivoComponent;
  let fixture: ComponentFixture<EjPruebaFormReactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjPruebaFormReactivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjPruebaFormReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
