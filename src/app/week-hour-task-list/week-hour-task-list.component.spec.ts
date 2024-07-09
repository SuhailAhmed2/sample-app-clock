import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekHourTaskListComponent } from './week-hour-task-list.component';

describe('WeekHourTaskListComponent', () => {
  let component: WeekHourTaskListComponent;
  let fixture: ComponentFixture<WeekHourTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeekHourTaskListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeekHourTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
