import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.less'
})
export class TaskComponent {
  showContentFirstTask:boolean=false;
  showContentSecondTask:boolean=false;
  showContentThirdTask:boolean=false;
  //@ts-ignore
  @Input() taskDetails:Array<any>;
  showContent:Array<boolean>=[false,false,false];
  colors=['#cc72e4','#5a309c','#3A888F'];
}
