import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from './resume/resume.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PersonQueryComponent} from './person-query/person-query.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: '', component: ResumeComponent},
  {
    path: 'home', component: HomeComponent, data: {title: '主 页ヽ(￣▽￣)ﾉ'},
    children: [{path: 'query', component: PersonQueryComponent, data: {title: '查询页(｀・ω・´)'}},
      {path: 'profile', component: ProfileComponent, data: {title: '个人中心(～￣▽￣)～ '}}]
  },
  {path: 'resume', component: ResumeComponent, data: {title: '个人简历(￣▽￣)／'}},
  {path: 'login', component: LoginComponent, data: {title: '登 录 (〃\'▽\'〃)'}},
  {path: 'register', component: RegisterComponent, data: {title: '注 册(｡･ω･｡)'}},
  // 找不到相应的页面后跳转指定页面
  {path: '**', component: NotFoundComponent, data: {title: '抱歉,找不到你访问的页面!╮(╯﹏╰）╭'}}
];
//  使用hash模式
@NgModule({
  imports: [
    [RouterModule.forRoot(routes, {useHash: true})]
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
