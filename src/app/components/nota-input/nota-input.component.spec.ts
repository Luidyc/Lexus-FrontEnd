import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaInputComponent } from './nota-input.component';

describe('NotaInputComponent', () => {
  let component: NotaInputComponent;
  let fixture: ComponentFixture<NotaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotaInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
