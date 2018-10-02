import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NapoComponent } from './napo.component';

describe('NapoComponent', () => {
  let component: NapoComponent;
  let fixture: ComponentFixture<NapoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NapoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NapoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
