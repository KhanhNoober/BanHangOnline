import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeopoldGearsComponent } from './leopold-gears.component';

describe('LeopoldGearsComponent', () => {
  let component: LeopoldGearsComponent;
  let fixture: ComponentFixture<LeopoldGearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeopoldGearsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeopoldGearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
