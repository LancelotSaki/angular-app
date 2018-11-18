import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  progressStatus = true;
  @ViewChild('myGridId') myGridId: ElementRef;
  @ViewChild('myAutoDiv') myAutoDiv: ElementRef;
  constructor(private render: Renderer2, private router: Router) { }
  ngOnInit() {
    const expire = localStorage.getItem('expireLogin');
    const type = localStorage.getItem('loginType');
    const currentTime = Date.parse(new Date().toString()) / 1000;
    console.log('expire=' + expire);
    if ( expire == null || expire.length === 0 || parseInt(expire, 10) - currentTime <= 0) {
      localStorage.removeItem('loginType');
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      this.router.navigateByUrl('login');
      return;
    }
    if (type === '1' || type === '2') {
      const u = localStorage.getItem('username');
      const p = localStorage.getItem('password');
      console.log('u=' + u + ',p=' + p);
    } else {
      localStorage.removeItem('loginType');
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      this.router.navigateByUrl('register');
      return;
    }

    setTimeout(() => {
      this.progressStatus = false;
    }, 3000);
  }
/*  myGridEnter($event) {
    this.render.removeClass(this.myAutoDiv.nativeElement, 'hide');
    this.render.setStyle(this.myAutoDiv.nativeElement, 'right', '120px');
    const c = $event.clientY - $event.offsetY + 35;
    this.render.setStyle(this.myAutoDiv.nativeElement, 'top', c.toString() + 'px');
    this.render.addClass(this.myAutoDiv.nativeElement, 'show');
  }
  myGridLeave($event) {
    this.render.removeClass(this.myAutoDiv.nativeElement, 'show');
    this.render.addClass(this.myAutoDiv.nativeElement, 'hide');
  }*/
}
