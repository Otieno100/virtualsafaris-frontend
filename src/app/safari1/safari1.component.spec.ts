import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Safari1Component } from './safari1.component';

describe('Safari1Component', () => {
  let component: Safari1Component;
  let fixture: ComponentFixture<Safari1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Safari1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Safari1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
