import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGroupListComponent } from './view-group-list.component';

describe('ViewGroupListComponent', () => {
  let component: ViewGroupListComponent;
  let fixture: ComponentFixture<ViewGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGroupListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
