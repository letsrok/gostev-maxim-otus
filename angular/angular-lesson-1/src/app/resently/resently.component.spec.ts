import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentlyComponent } from './resently.component';

describe('ResentlyComponent', () => {
  let component: ResentlyComponent;
  let fixture: ComponentFixture<ResentlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResentlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
