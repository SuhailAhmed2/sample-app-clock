import { Component } from '@angular/core';
import {tasks} from './tasks';

@Component({
  selector: 'app-week-hour-task-list',
  templateUrl: './week-hour-task-list.component.html',
  styleUrl: './week-hour-task-list.component.less'
})
export class WeekHourTaskListComponent {
  tasks=tasks;
  allTaskKeys:any=[];
  allHourKeys=[
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23"
]
  allDayKeys=["2024-05-10","2024-05-11","2024-05-12","2024-05-13","2024-05-14"];//,"2024-05-15","2024-05-16"]
  constructor()
  {
    // for( let key in this.tasks)
    //   {
    //     this.allTaskKeys.push(key);
    //   }
    
  }
  getHourHeading(singleTask:any)
  {
    return Math.random() *10 >5?  '12:00 am - 1am' : '1:00 am - 2am'
  }

}

