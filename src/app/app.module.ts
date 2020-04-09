import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { CanvasSampleComponent } from './components/page1/canvas-sample/canvas-sample.component';
import { AppRoutingModule } from './app.routing';
import { VirtualScrollComponent } from './components/page2/virtual-scroll/virtual-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CanvasSampleComponent,
    VirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
