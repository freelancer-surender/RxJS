import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {

  firstObservable$: Observable<string> | undefined;
  myObserver: any | undefined;
  countries = [];
  myNumbers$: Observable<number> | undefined;
  numSubscription: Subscription | undefined;
  httpSubscription: Subscription | undefined;
  techObservable$: Observable<string> | undefined;
  randomObservable$: Observable<number> | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.firstObservable$ = new Observable((subscriber) => {
      console.log("Observable is executed");
      subscriber.next("Please subscribe to Web Tech Talk");
    });
    console.log(this.firstObservable$);

    this.myObserver = {
      next: ((value: string) => console.log(value))
    };

    // this.firstObservable$.subscribe(this.myObserver);
    this.firstObservable$.subscribe((value: string) => console.log(value));

    // this.httpSubscription = this.http.get("http://localhost:3000/api/countries").subscribe((countries: any) => {
    //   this.countries = countries;
    //   console.log(this.countries);
    // });

    this.myNumbers$ = new Observable((numSub) => {
      let count = 1;
      let myInterval = setInterval(() => {
        console.log('Emitted: ', count);
        numSub.next(count++);
        // if (count === 6) {
          // numSub.complete();
          // numSub.error();
          // numSub.error({code: 500, message: "Internal Server Error"});
          // numSub.next(count++);
        // }
      }, 1000);

      return () => {
        console.log("Teardown logic can be implemented here");
        if (myInterval) {
          clearInterval(myInterval);
        }
      }
    });
    // this.myNumbers$.subscribe((num: number) => console.log(num));
    // this.numSubscription = this.myNumbers$.subscribe({
    //   next: ((num: number) => console.log(num)),
    //   complete: () => console.log("Completed"),
    //   // error: () => console.log("Something went wrong")
    //   error: (err) => console.log(err.message)
    // });

    setTimeout(() => {
      if (this.numSubscription) {
        this.numSubscription.unsubscribe();
      }
    }, 10000);

    this.techObservable$ = new Observable((techSub) => {
      console.log("Emission started");
      // techSub.next("Angular");
      // techSub.next("React");
      // techSub.next("Vue");
      // techSub.complete();
      setTimeout(() => {
        techSub.next("Angular");
      }, 1000);
      setTimeout(() => {
        techSub.next("React");
      }, 2000);
      setTimeout(() => {
        techSub.next("Vue");
        techSub.complete();
      }, 3000);

      console.log("Emission ended");
    });

    console.log("Before Subscribe");
    this.techObservable$.subscribe({
      next: ((value: string) => console.log(value)),
      complete: () => console.log("It is completed")
    });
    console.log("After Subscribe");

    this.randomObservable$ = new Observable((subscriber) => {
      console.log("Observable is executed");
      subscriber.next(Math.random());
    });

    this.randomObservable$.subscribe(num => console.log("Subscription 1: ", num));
    this.randomObservable$.subscribe(num => console.log("Subscription 2: ", num));
  }

  ngOnDestroy(): void {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
  }
  
}
