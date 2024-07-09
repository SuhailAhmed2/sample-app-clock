import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrl: './task-content.component.less'
})
export class TaskContentComponent {
  @Input() showTaskDetails:boolean = false;
  @Input() taskContent:any;

}
