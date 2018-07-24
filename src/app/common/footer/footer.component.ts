import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements OnInit {
  leftShow = true;
  rightShow = true;
  maxHeight: number;
  // 注意：不能用来做dom操作
  constructor() {
  }

  // ngOnInit等同于react中的componentDidMount(加载时只执行一次)
  ngOnInit() {
    const scroll = document.documentElement.scrollTop;
    const sh = document.documentElement.scrollHeight;
    const ch = document.documentElement.clientHeight;
    // 当前浏览器滚动条的最大高度
    this.maxHeight = sh - ch;
    this.maxHeight - scroll <= 3 ? this.leftShow = false : this.leftShow = true;
    scroll >= 3 ? this.rightShow = true : this.rightShow = false;
  }

  leftClick() {
    let x = 0;
    let height = document.documentElement.scrollTop;
    const timer = setInterval(() => {
      height = height + 2 * (x++);
      document.documentElement.scrollTop = height;
      if (this.maxHeight - height <= 0) {
        clearInterval(timer);
      }
    }, 25);
  }

  rightClick() {
    let height = document.documentElement.scrollTop;
    let x = 0;
    const timer = setInterval(() => {
      height = height - 2 * (x++);
      document.documentElement.scrollTop = height;
      if (height <= 0) {
        document.documentElement.scrollTop = 0;
        clearInterval(timer);
      }
    }, 25);
  }

  // handle window scroll
  @HostListener('window:scroll', ['$event'])
  public windowScrolled($event: Event) {
    const scroll = document.documentElement.scrollTop;
    this.maxHeight - scroll <= 3 ? this.leftShow = false : this.leftShow = true;
    scroll >= 3 ? this.rightShow = true : this.rightShow = false;
  }
}
