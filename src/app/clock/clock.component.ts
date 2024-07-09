import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.less'
})
export class ClockComponent {
  static clockId=1;
  currentClockID;
  constructor()
  {
    this.currentClockID =ClockComponent.clockId++;
  }
  ngOnInit()
  {
    setTimeout(()=>{
      let rotationalValue=ClockComponent.clockId*30;
      //@ts-ignore
      let divFirstHand:HTMLDivElement=document.querySelector('.hour-hand.morning');
      if(divFirstHand)
      divFirstHand.style.setProperty('transform',`rotate(${rotationalValue}deg)`)
      // document.querySelector('.hour-hand.morning')?.setAttribute('transform',`rotate(${rotationalValue})`);
      
      let rotationalValue2=rotationalValue+30;      
      //@ts-ignore
      let divAfternoonHand:HTMLDivElement=document.querySelector('.hour-hand.afternoon');
      if(divAfternoonHand)
        divAfternoonHand.style.setProperty('transform',`rotate(${rotationalValue2}deg)`)
      
    },ClockComponent.clockId*20000);
    

  }

}
