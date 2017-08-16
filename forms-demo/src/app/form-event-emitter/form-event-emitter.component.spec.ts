import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEventEmitterComponent } from './form-event-emitter.component';

describe('FormEventEmitterComponent', () => {
  let component: FormEventEmitterComponent;
  let fixture: ComponentFixture<FormEventEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEventEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
