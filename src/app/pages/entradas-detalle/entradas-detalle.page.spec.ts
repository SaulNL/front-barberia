import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntradasDetallePage } from './entradas-detalle.page';

describe('EntradasDetallePage', () => {
  let component: EntradasDetallePage;
  let fixture: ComponentFixture<EntradasDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
