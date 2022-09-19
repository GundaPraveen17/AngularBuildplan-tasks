import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaculaityComponent } from './faculaity.component';

describe('FaculaityComponent', () => {
  let component: FaculaityComponent;
  let fixture: ComponentFixture<FaculaityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaculaityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaculaityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
