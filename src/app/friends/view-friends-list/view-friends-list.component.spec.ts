import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFriendsListComponent } from './view-friends-list.component';

describe('ViewFriendsListComponent', () => {
  let component: ViewFriendsListComponent;
  let fixture: ComponentFixture<ViewFriendsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFriendsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFriendsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
