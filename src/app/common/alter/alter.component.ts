import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alter',
  templateUrl: './alter.component.html',
  styleUrls: ['./alter.component.css']
})
export class AlterComponent implements OnInit {


  // 子组件ts，告诉组件，message是父组件传进来的
  @Input() public status: boolean;
  // 子组件主动发送数据给父组件
  @Output() private childOuter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.status = this.status === null || this.status === undefined ? false : this.status;
  }

  closeAlert() {
    this.status = false;
    this.childOuter.emit({status: false});
  }
}
