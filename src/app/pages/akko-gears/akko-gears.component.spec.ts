import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkkoGearsComponent } from './akko-gears.component';

describe('AkkoGearsComponent', () => {
  let component: AkkoGearsComponent;
  let fixture: ComponentFixture<AkkoGearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkkoGearsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkkoGearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
