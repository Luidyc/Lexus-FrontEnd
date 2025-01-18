import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenciaLayoutComponent } from './conferencia-layout.component';

describe('ConferenciaLayoutComponent', () => {
  let component: ConferenciaLayoutComponent;
  let fixture: ComponentFixture<ConferenciaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenciaLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferenciaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
