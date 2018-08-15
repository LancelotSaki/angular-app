import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonQueryComponent } from './person-query.component';

describe('PersonQueryComponent', () => {
  let component: PersonQueryComponent;
  let fixture: ComponentFixture<PersonQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
