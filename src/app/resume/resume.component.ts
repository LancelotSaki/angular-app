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
  dialog = '';
  dialogState = '';
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
    this.angularVersion = `Angular v6.0.9`;
  }

  ngOnInit() {
    const date = new Date();
    let words = ``;
    console.log(date.getHours());
    const currentTime = date.getHours();
    if (currentTime > 5 && currentTime <= 8) {
      words = '早上好!';
    } else if (currentTime > 8 && currentTime <= 10) {
      words = '上午好!';
    } else if (currentTime > 10 && currentTime <= 12) {
      words = '中午好!';
    } else if (currentTime > 12 && currentTime <= 18) {
      words = '下午好!';
    } else if (currentTime > 18 && currentTime <= 23) {
      words = '晚上好!';
    } else if (currentTime >= 0 && currentTime <= 5) {
      words = '已经深夜了,看什么看!';
    } else {
      words = '你好!';
    }
    // 3s后执行
    window.setTimeout(() => {
      this.exeDialog(words).then( () => {
        this.waitTimeCloseDialog();
      });
    }, 3000);
    const nextB = '感谢你查看我的简历!';
    // 23s后执行
    window.setTimeout(() => {
      this.exeDialog(nextB).then( () => {
        this.waitTimeCloseDialog();
      });
    }, 23000);
    const nextC = '今天吃点什么好呢?';
    // 40s后执行
    window.setTimeout(() => {
      this.exeDialog(nextC).then( () => {
        this.waitTimeCloseDialog();
      });
    }, 40000);
    const nextD = '今天天气不错?';
    // 60S后执行
    window.setTimeout(() => {
      this.exeDialog(nextD).then( () => {
        this.waitTimeCloseDialog();
      });
    }, 60000);
    const nextE = '无聊啊,敲代码吧!';
    // 120s后执行
    window.setTimeout(() => {
      this.exeDialog(nextE).then( () => {
        this.waitTimeCloseDialog();
      });
    }, 120000);
    console.log(`开始执行`);
  }

  /*同步执行*/
  async exeDialog(words) {
    console.log(`开始内部同步执行`);
    // await修饰的方法里面返回的必须是promise
    this.dialogState = 'dialogShow';
    const result = await this.returnSay(words);
    console.log(result);
    console.log(`同步执行结束`);
  }
  returnSay(words) {
    let x = 0;
    return new Promise((res) => {
      const ti = setInterval(() => {
        const say = words.substring(0, x++);
        this.dialog = say;
        if (words.length - x < 0) {
          clearInterval(ti);
          res(`ok`);
        }
      }, 120 );
    });
  }

  waitTimeCloseDialog() {
    window.setTimeout( () => {
      this.dialogState = 'dialogHide';
      this.dialog = '';
    }, 3000);
  }
}
