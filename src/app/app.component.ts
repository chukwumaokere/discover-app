import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public mainMenu = [
    {
      title: 'Feed',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Songs',
      url: '/songs',
      icon: 'musical-notes'
    },
    {
      title: 'Albums',
      url: '/albums',
      icon: 'folder-open'
    },
    {
      title: 'Artists',
      url: '/artists',
      icon: 'person'
    },
    {
      title: 'My music',
      url: '/mymusic',
      icon: 'musical-note'
    },
    {
      title: 'Radio',
      url: '/radio',
      icon: 'radio'
    },
  ];
  public yourMusic = [
    {
      title: 'Favorites',
      url: '/favorites',
      icon: 'heart'
    },
    {
      title: 'Playlist',
      url: '/playlist',
      icon: 'list'
    },
    {
      title: 'Downloads',
      url: '/downloads',
      icon: 'download'
    },
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
