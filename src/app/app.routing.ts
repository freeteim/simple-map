import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { CanvasSampleComponent } from './components/page1/canvas-sample/canvas-sample.component';
import { VirtualScrollComponent } from './components/page2/virtual-scroll/virtual-scroll.component';

const appRoutes: Routes = [
  { path: '', component: MapComponent },
  { path: 'page1', component: CanvasSampleComponent },
  { path: 'page2', component: VirtualScrollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }