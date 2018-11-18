import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
const phoneReg = /^[1][3, 4,5,7,8][0-9]{9}$/;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formValue = {
    username: '',
    password: '',
    phone: '',
    verifyCode: ''
  };
  checkBox = {
    usernameCheck: '',
    passwordCheck: '',
    phoneCheck: '',
    verifyCheck: ''
  };
  leftTime = 60;
  sendClickDisable = true;
  alterWords = '父节点传过来的';
  alterStatus = false;
  agreementStatus = false;
  constructor() { }

  ngOnInit() {
    // 手机校验
    const saveTime = localStorage.getItem('time');
    console.log(saveTime);
    const currentTime = Date.parse(new Date().toString()) / 1000;
    console.log(currentTime);
    if (saveTime != null && saveTime !== undefined && saveTime !== '' && parseInt(saveTime, 10) > currentTime) {
      this.leftTime = parseInt(saveTime, 10) - currentTime;
      const interval = setInterval(() => {
        if (this.leftTime <= 0) {
          this.leftTime = 60;
          clearInterval(interval);
        } else {
          this.leftTime--;
        }
      }, 1000);
    }
  }
  phoneChange($event) {
    const phone = this.formValue.phone;
    this.sendClickDisable = true;
    if (phone == null || phone.length !== 11) {
      this.checkBox.phoneCheck = '请先输入11位的手机号码!';
      return;
    } else if (!phone.match(phoneReg)) {
      this.checkBox.phoneCheck = '手机号码格式不正确!';
      return;
    } else {
      this.checkBox.phoneCheck = '';
      if (this.leftTime === 60) {
        this.sendClickDisable = false;
      }
      return;
    }
  }
  clickSend() {
    this.sendClickDisable = true;
    const phone = this.formValue.phone;
    if (phone == null || phone.length !== 11) {
      this.checkBox.phoneCheck = '请先输入11位的手机号码!';
      return;
    } else if (!phone.match(phoneReg)) {
      this.checkBox.phoneCheck = '手机号码格式不正确!';
      return;
    }
    this.checkBox.phoneCheck = '';
    const current = Date.parse(new Date().toString()) / 1000;
    localStorage.setItem('time', (current + 60).toString());
    const interval = setInterval(() => {
      if ((this.leftTime) <= 0) {
        this.leftTime = 60;
        this.sendClickDisable = false;
        clearInterval(interval);
      } else {
        this.sendClickDisable = true;
        this.leftTime--;
      }
    }, 1000);
  }
  verifyChange($event) {
    const code = this.formValue.verifyCode;
    if (code == null || code.length === 0) {
      this.checkBox.verifyCheck = '验证码为空!';
    } else if (code.length !== 6 ) {
      this.checkBox.verifyCheck = '请输入6位数的验证码!';
    } else if (!code.match(/^[a-zA-Z0-9]+$/) ) {
      this.checkBox.verifyCheck = '只能是数字、字母!';
    } else {
      this.checkBox.verifyCheck = '';
    }
  }
  leftTimeFunction() {
    return this.leftTime === 60 ? '发 送' : this.leftTime + '秒';
  }
  readClick() {
    this.alterStatus = true;
  }
  getChildData($event) {
    this.alterStatus = $event.status;
  }
}
