import { Component, OnInit } from '@angular/core';
// 外部引入变量或者常量值，类似于java中的实体类
import { Profile, Exp } from './resume';
import {Area} from '../../assets/common/area';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  // 1.直接定义直接赋值(赋值使用要用等于号)
  title = '个人简历';
  // 2.先定义再使用(定义用冒号)
  angularVersion: string;
  // 3.外部引入再赋值
  profile: Profile = {
    id : 1,
    name : 'carney'
  };
  exps = [
    new Exp('20180101', '装逼无止境'),
    new Exp('20180301', '装逼如风')
  ];
  skills = [{id: '1', name: 'Java', value: '0.78'},
    {id: '2', name: 'JavaScript', value: '0.67'},
    {id: '3', name: 'Vue', value: '0.69'},
    {id: '4', name: 'React', value: '0.70'},
    {id: '5', name: 'Angular', value: '0.60'}];
  constructor() {
    console.log(`${this.skills[0].name}`);
    console.log(`${Area}`);
    this.angularVersion = `Angular v6.0.9`;
  }

  ngOnInit() {
  }

  willClick() {
    console.log(`点击一下`);
  }
}
