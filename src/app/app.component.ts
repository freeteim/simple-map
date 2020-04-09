import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  ngOnInit() {

    // this.promise1().then(() => {
    //   console.log('test1');
    //   this.promise2().then(() => {
    //     console.log('test2');
    //   })
    // })  
  }

  promise1() {
    console.log('promise1 body');
    return new Promise(function(resolve) {
      console.log('promise1 return');
      resolve();
    })
  }

  promise2() {
    console.log('promise2 body');
    return new Promise(function(resolve) {
      console.log('promise2 return');
      resolve();
    })
  }
}
