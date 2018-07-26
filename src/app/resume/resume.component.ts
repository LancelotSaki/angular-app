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
    new Info('6', '北京二环')
  ];
  skills = [{id: '1', name: 'Java', value: 86, image: '../../assets/images/skill-icon/java.svg'},
    {id: '2', name: 'JavaScript', value: 67, image: '../../assets/images/skill-icon/javascript.svg'},
    {id: '3', name: 'Vue', value: 72, image: '../../assets/images/skill-icon/vue.svg'},
    {id: '4', name: 'React', value: 85, image: '../../assets/images/skill-icon/react.svg'},
    {id: '5', name: 'Angular', value: 77, image: '../../assets/images/skill-icon/angular.svg'},
    {id: '6', name: 'Jquery', value: 74, image: '../../assets/images/skill-icon/jquery.svg'},
    {id: '7', name: 'Oracle', value: 68, image: '../../assets/images/skill-icon/oracle.svg'},
    {id: '8', name: 'Mysql', value: 70, image: '../../assets/images/skill-icon/mysql.svg'},
    {id: '9', name: 'Linux', value: 82, image: '../../assets/images/skill-icon/linux.svg'}];
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
