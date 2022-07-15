import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Safari2Component } from './safari2.component';

describe('Safari2Component', () => {
  let component: Safari2Component;
  let fixture: ComponentFixture<Safari2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Safari2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Safari2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
