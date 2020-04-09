import { Component, OnInit, ViewChild } from '@angular/core';

/**
 * [=] - 실제 스크롤 가능 높이 (h)
 * [-] - "페이지";  모든 (n) 페이지의 총 높이는  
 * (총 높이 th) = (페이지 높이 ph) * (페이지 n)
 * 
 * 페이지 사이 겹치는 부분 (cj) 과 스크롤바 길이
 * 스크롤 높이에 따른 페이지 전환시점에 넘어갈 것이다.
 *
 * 부드럽게 유지하기 위해 (n) 과 (cj) 를 최소화해야 한다.
 * (ph) 를 (h) 값의 1/100 으로 설정해야 좋은 시발점이 된다.
 */

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

  @ViewChild('viewport') viewport;
  @ViewChild('content') content;

  prevScrollTop: number = 0;
  vp: number = 0;             // vieweport height
  page: number = 0;
  offset: number = 0;
  th: number = 0;             // content height * 100
  h: number = 0;              // content height
  ph: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.vp = this.getViewport().offsetHeight;
    this.h = this.getContent().offsetHeight;
    this.th = this.h * 100;
    this.ph = this.h / 100;               // 페이지 높이
  }

  onScroll(evt) {
    const el_viewport = this.getViewport();
    const scrollTop: number = el_viewport.scrollTop;

    if (Math.abs(scrollTop - this.prevScrollTop) > this.vp) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  private onJump() {
    const scrollTop: number = this.getViewport().offsetHeight;
    this.page = Math.floor(scrollTop * ((this.th - this.vp) / (this.h - this.vp)) * (1 / this.ph));
    // this.offset = Math.round(page * cj);
    // prevScrollTop = scrollTop;
    
    // removeAllRows();
  }

  private getViewport() {
    return this.viewport.nativeElement;
  }
  private getContent() {
    return this.content.nativeElement;
  }
}
