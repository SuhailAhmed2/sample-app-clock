import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar',
  template: `
    <div class="calendar">
      <div class="header">
        <div *ngFor="let day of days" class="day">{{ day }}</div>
      </div>
      <div class="days">
        <div *ngFor="let week of weeks" class="week">
          <div *ngFor="let day of week" class="day">{{ day }}</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .calendar {
      width: 100%;
    }
    .header {
      display: flex;
      justify-content: space-between;
    }
    .day {
      flex: 1;
      text-align: center;
      border: 1px solid #ccc;
      padding: 5px;
    }
    .week {
      display: flex;
      border-top: 1px solid #ccc;
    }
  `]
})
export class AppCalendarComponent {
  @Input() startDate: Date = new Date();
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  get weeks() {
    const weeks = [];
    let currentDate = new Date(this.startDate);
    for (let i = 0; i < 7; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        week.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeks.push(week);
    }
    return weeks;
  }
}
