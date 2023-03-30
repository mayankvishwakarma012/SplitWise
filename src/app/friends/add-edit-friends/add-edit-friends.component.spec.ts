import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFriendsComponent } from './add-edit-friends.component';

describe('AddEditFriendsComponent', () => {
  let component: AddEditFriendsComponent;
  let fixture: ComponentFixture<AddEditFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFriendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
