import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCalendarComponent } from './calendar/calendar.component';
import { TaskComponent } from './task/task.component';
import { TaskContentComponent } from './task-content/task-content.component';
import { WeekHourTaskListComponent } from './week-hour-task-list/week-hour-task-list.component';
import { CommonModule } from '@angular/common';
import { GetTaskFromDatekeyPipe } from './get-task-from-datekey.pipe';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCalendarComponent,
    TaskComponent,
    TaskContentComponent,
    WeekHourTaskListComponent,
    GetTaskFromDatekeyPipe,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
