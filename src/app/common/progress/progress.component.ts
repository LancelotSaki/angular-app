import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
// 子组件ts，告诉组件，message是父组件传进来的
  @Input() public status: string;
  constructor() { }

  ngOnInit() {
  }

}
