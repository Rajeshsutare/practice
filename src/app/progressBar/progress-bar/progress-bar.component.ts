import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent {

  lowRisk: number = 70; // Example percentage for low risk
   highRisk: number = 30; // Example percentage for high risk

   onLowRisk(){
    console.log(this.lowRisk);
    
   }
   onHighRisk(){
    console.log(this.highRisk);
    
   }

}
