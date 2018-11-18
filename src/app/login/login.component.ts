import {Component, OnInit, ElementRef, ViewChild, Renderer2} from '@angular/core';
import { Router} from '@angular/router';
import {environment} from '../../environments/environment';
const phoneReg = environment.phoneReg;
const emailReg = environment.emailReg;
const passwordReg = environment.passwordReg;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  leftTime = 60;
  formValue = {
    username: '',
    password: '',
    phone: '',
    verifyCode: ''
  };
  sendClickDisable = true;
  checkBox = {
    usernameCheck: '',
    passwordCheck: '',
    phoneCheck: '',
    verifyCheck: ''
  };
  submit1Disable = {
    username: true,
    password: true,
  };
  submit2Disable = {
    phone: true,
    verify: true,
  };
  @ViewChild('loginProcess') loginProcess: ElementRef;
  constructor(private router: Router, private render: Renderer2) { }
  ngOnInit() {
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
  usernameChange($event) {
    const username = this.formValue.username;
    if (username == null || username.length < 7) {
      this.checkBox.usernameCheck = '请先输入至少七位的用户名!';
      this.submit1Disable.username = true;
      return;
    } else if (!(username.match(emailReg) || username.match(phoneReg))) {
      this.submit1Disable.username = false;
      this.checkBox.usernameCheck = '只能是邮箱或者手机号';
      return;
    } else {
      this.submit1Disable.username = false;
      this.checkBox.usernameCheck = '';
      return;
    }
  }
  passwordChange($event) {
    const password = this.formValue.password;
    console.log(password);
    if (password == null || password.length < 6) {
      this.checkBox.passwordCheck = '请先输入至少六位的密码!';
      this.submit1Disable.password = true;
      return;
    } else if (!password.match(passwordReg)) {
      this.checkBox.passwordCheck = '只能是数字或者字母!';
      this.submit1Disable.password = false;
      return;
    } else {
      this.checkBox.passwordCheck = '';
      this.submit1Disable.password = false;
      return;
    }
  }
  phoneChange($event) {
    const phone = this.formValue.phone;
    this.sendClickDisable = true;
    if (phone == null || phone.length !== 11) {
      this.checkBox.phoneCheck = '请先输入11位的手机号码!';
      this.submit2Disable.phone = true;
      return;
    } else if (!phone.match(phoneReg)) {
      this.checkBox.phoneCheck = '手机号码格式不正确!';
      this.submit2Disable.phone = true;
      return;
    } else {
      this.checkBox.phoneCheck = '';
      this.submit2Disable.phone = false;
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
  leftTimeFunction() {
    return this.leftTime === 60 ? '发 送' : this.leftTime + '秒';
  }
  verifyChange($event) {
    const code = this.formValue.verifyCode;
    if (code == null || code.length === 0) {
      this.checkBox.verifyCheck = '验证码为空!';
      this.submit2Disable.verify = true;
    } else if (code.length !== 6 ) {
      this.checkBox.verifyCheck = '请输入6位数的验证码!';
      this.submit2Disable.verify = true;
    } else if (!code.match(/^[a-zA-Z0-9]+$/) ) {
      this.checkBox.verifyCheck = '只能是数字、字母!';
    } else {
      this.checkBox.verifyCheck = '';
      this.submit2Disable.verify = false;
    }
  }
  beforeSubmit1() {
    return this.submit1Disable.username || this.submit1Disable.password;
  }
  beforeSubmit2() {
    return this.submit2Disable.verify || this.submit2Disable.phone;
  }
  onSubmit1() {
    // console.log(this.formValue);
    if (this.formValue.username === '18868875659' && this.formValue.password === '123456') {
      localStorage.setItem('loginType', '1');
      localStorage.setItem('username', this.formValue.username);
      localStorage.setItem('password', this.formValue.password);
      const current = Date.parse(new Date().toString()) / 1000;
      localStorage.setItem('expireLogin', (current + 12000).toString());
      this.router.navigateByUrl('home');
    } else {
      this.checkBox.passwordCheck = '用户名、密码错误!';
    }
  }
  onSubmit2() {
    // console.log(this.formValue);
    if (this.formValue.phone === '18868875659' && this.formValue.verifyCode === '123456') {
      localStorage.setItem('loginType', '2');
      localStorage.setItem('username', this.formValue.phone);
      localStorage.setItem('password', '123456');
      const current = Date.parse(new Date().toString()) / 1000;
      localStorage.setItem('expireLogin', (current + 12000).toString());
      this.router.navigateByUrl('home');
    } else {
      this.checkBox.verifyCheck = '手机校验码错误!';
    }
  }
}
