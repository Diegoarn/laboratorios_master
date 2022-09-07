import { Component, OnInit } from '@angular/core';
import { GaleriaModel } from 'src/app/models/galeria.model';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {
  galery: GaleriaModel[] = [
    { id: 0, src: './assets/mahou.jpg', title: 'Mahou' },
    { id: 1, src: './assets/aguila.jpg', title: 'Aguila' },
    { id: 2, src: './assets/barrica.jpg', title: 'Barrica' },
    { id: 3, src: './assets/bud.jpg', title: 'Budweisser' },
    { id: 4, src: './assets/alhambra.jpg', title: 'Alhambra' },
    { id: 5, src: './assets/damm.jpg', title: 'Damm' },
    { id: 6, src: './assets/daura.jpg', title: 'Daura' },
    { id: 7, src: './assets/sol.jpg', title: 'Sol' },
  ];

  imgPath = '';
  beer = 'Mahou';
  imgId = 0;
  timeLeft: number = 60;
  interval: any;
  size: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.loadImg(0);
  }

  public loadImg(id: number) {
    this.imgPath = this.galery[id].src;
    this.imgId = id;
    this.beer = this.galery[id].title;
  }

  public changeImg(direction: number) {
    let newId = 0;
    if (direction == 1) {
      newId = this.imgId + 1;
    } else {
      newId = this.imgId - 1;
    }
    if (newId < 8) {
      this.beer = this.galery[newId].title;
      this.imgPath = this.galery[newId].src;
      this.loadImg(this.galery[newId].id);
    } else {
      this.imgId = newId;
    }
  }

  starTimerInit() {
    this.imgId = 0;
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.imgId == 0) {
        this.loadImg(this.galery[0].id);
        this.imgId = 1;
      } else if (this.imgId > 0 && this.imgId <= 7) {
        this.changeImg(1);
      } else {
        this.pauseTimer();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  public increaseImg() {
    this.size = true;
  }
  public decreaseImg() {
    this.size = false;
  }
}
