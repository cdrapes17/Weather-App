import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-day-forecast-container',
  templateUrl: './five-day-forecast-container.component.html',
  styleUrls: ['./five-day-forecast-container.component.scss']
})
export class FiveDayForecastContainerComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  activated = false;

  // /Users/holitiondev/charlie/Weather-App/src/assets/lottie-animations/favourite_app_icon.json

  constructor() { 
    this.lottieConfig = {
      path: '../../../../assets/lottie-animations/favourite_app_icon.json',
      autoplay: false,
      loop: false
    };
  }

  ngOnInit() {
  }

  handleAnimation(anim: any) {
    this.anim = anim;
    this.anim.addEventListener("complete", e => {
      console.log(e);
      this.activated = true;
    });
}

  play(){
    this.anim.play()
  }

  stop(){
    this.anim.stop();
    this.activated = false;
  }

  animate() {
    this.activated ? this.stop() : this.play();


  }

}
