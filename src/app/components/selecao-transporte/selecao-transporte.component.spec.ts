import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoTransporteComponent } from './selecao-transporte.component';

describe('SelecaoTransporteComponent', () => {
  let component: SelecaoTransporteComponent;
  let fixture: ComponentFixture<SelecaoTransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecaoTransporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
