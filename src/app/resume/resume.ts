export class Profile {
  id: number;
  name: string;
}
// 构造函数赋值 相当于java里的类
export class Info {
  constructor(public key: string, public value: string) {}
}


export class Exp {
  constructor(public time: string, public content: string) {}
}
