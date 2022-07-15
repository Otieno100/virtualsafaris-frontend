import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Safari3Component } from './safari3.component';

describe('Safari3Component', () => {
  let component: Safari3Component;
  let fixture: ComponentFixture<Safari3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Safari3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Safari3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
