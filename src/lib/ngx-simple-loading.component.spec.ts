import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleLoadingComponent } from './ngx-simple-loading.component';

describe('NgxSimpleLoadingComponent', () => {
  let component: NgxSimpleLoadingComponent;
  let fixture: ComponentFixture<NgxSimpleLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSimpleLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
