import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {IonSlides, NavController, Platform} from '@ionic/angular';
import {StorageService} from 'src/app/services/storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  @ViewChild('welcomeSlider') slides: IonSlides;

  showWelcome = true;

  constructor(
      private readonly router: Router,
      private readonly storage: StorageService,
      private readonly platform: Platform,
  ) {}

  get notificationPhoto(): string {
    const platform = this.platform.is('ios') ? 'ios' : 'android';
    console.log(platform);
    return `../../../assets/notif-${platform}.png`;
  }

  next() {
    this.slides.slideNext();
  }

  done() {
    this.router.navigate(['/tabs']);
    this.storage.setLoggedIn();
  }
}
