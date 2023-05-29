import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej1FormReactivosComponent } from './ej1-form-reactivos.component';

describe('Ej1FormReactivosComponent', () => {
  let component: Ej1FormReactivosComponent;
  let fixture: ComponentFixture<Ej1FormReactivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej1FormReactivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ej1FormReactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
