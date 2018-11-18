import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
@Injectable()
export class TitleService {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {}
  getTitle() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
          return route;
        }
      }),
      switchMap(route => route.data),
      map((data) => {
        if (data.title) {
          // If a route has a title set (e.g. data: {title: "Foo"}) then we use it
          return data.title;
        } else {
          // If not, we do a little magic on the url to create an approximation
          return 'angular-app';
        }
      })
    )
      .subscribe((pathString) => this.titleService.setTitle(`${pathString}`));
  }
}
