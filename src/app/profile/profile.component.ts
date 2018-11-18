import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { fromEvent } from 'rxjs';
import { catchError, debounceTime, throttleTime } from 'rxjs/operators';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  hello = '你好';
  current = 18;
  arr = [1, 2];
  @ViewChild('myId')
  myId: ElementRef;
  @ViewChild('myNextId')
  myNextId: ElementRef;
  constructor() {
  }
  ngOnInit() {
   // const clicks = fromEvent(this.myId.nativeElement, 'click');
   // clicks.pipe(debounceTime(2000)).subscribe(x => console.log(x));
    // throttle
   // const nextClicks = fromEvent(this.myNextId.nativeElement, 'click');
   // const result = nextClicks.pipe(throttleTime(2000));
   // result.subscribe(x => console.log(x));
    // http交互
    // this.http.get('').subscribe(res => { console.log('lig') });

  }
  onChange() {
    console.log('change');
  }
}
