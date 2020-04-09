import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-canvas-sample',
  templateUrl: './canvas-sample.component.html',
  styleUrls: ['./canvas-sample.component.css']
})
export class CanvasSampleComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') cavas;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.cavas);
    this.setCanvas();
  }

  setCanvas() {
    const canvas = this.cavas.nativeElement;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'https://cds.justoon.co.kr/container/contents/bg/000b0gk43e96/163ea604-6798-4671-a3ef-8b5c9997a318.jpg';
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
    }
  }

}
