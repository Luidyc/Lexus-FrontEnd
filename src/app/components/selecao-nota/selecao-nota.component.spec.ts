import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoNotaComponent } from './selecao-nota.component';

describe('SelecaoNotaComponent', () => {
  let component: SelecaoNotaComponent;
  let fixture: ComponentFixture<SelecaoNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecaoNotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
