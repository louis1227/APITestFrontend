import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueEnvironmentComponent } from './true-environment.component';

describe('TrueEnvironmentComponent', () => {
  let component: TrueEnvironmentComponent;
  let fixture: ComponentFixture<TrueEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
