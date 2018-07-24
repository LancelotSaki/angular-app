import { Component, OnInit } from '@angular/core';
// 外部引入变量或者常量值，类似于java中的实体类
import { Profile, Info } from './resume';

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
    id: 1,
    name: 'carney'
  };
  info = [
    new Info('1', 'carney'),
    new Info('2', '180000000'),
    new Info('3', '1103418874@qq.com'),
    new Info('4', '大学本科'),
    new Info('5', '牛岭大学'),
    new Info('6', '南宁市西乡塘鲁班路')
  ];
  skills = [{id: '1', name: 'Java', value: '0.78'},
    {id: '2', name: 'JavaScript', value: '0.67'},
    {id: '3', name: 'Vue', value: '0.69'},
    {id: '4', name: 'React', value: '0.70'},
    {id: '5', name: 'Angular', value: '0.70'},
    {id: '6', name: 'Jquery', value: '0.70'},
    {id: '7', name: 'Oracle', value: '0.70'},
    {id: '8', name: 'Mysql', value: '0.70'},
    {id: '9', name: 'ExtJs', value: '0.70'}];
  constructor() {
    this.angularVersion = `Angular v6.0.8`;
  }

  ngOnInit() {
    new Promise((res) => {
      res(`执行成功`);
    }).then((res) => {
      console.log(res);
    });
  }

  willClick() {
    console.log(`点击一下`);
  }
}
