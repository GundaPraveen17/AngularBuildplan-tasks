import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangloreFaculaityComponent } from './banglore-faculaity.component';

describe('BangloreFaculaityComponent', () => {
  let component: BangloreFaculaityComponent;
  let fixture: ComponentFixture<BangloreFaculaityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BangloreFaculaityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BangloreFaculaityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
