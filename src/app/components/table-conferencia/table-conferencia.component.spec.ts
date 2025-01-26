import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConferenciaComponent } from './table-conferencia.component';

describe('TableConferenciaComponent', () => {
  let component: TableConferenciaComponent;
  let fixture: ComponentFixture<TableConferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableConferenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableConferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
