import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpenseListComponent } from './view-expense-list.component';

describe('ViewExpenseListComponent', () => {
  let component: ViewExpenseListComponent;
  let fixture: ComponentFixture<ViewExpenseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExpenseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExpenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
