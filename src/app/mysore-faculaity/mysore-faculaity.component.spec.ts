import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysoreFaculaityComponent } from './mysore-faculaity.component';

describe('MysoreFaculaityComponent', () => {
  let component: MysoreFaculaityComponent;
  let fixture: ComponentFixture<MysoreFaculaityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysoreFaculaityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysoreFaculaityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
