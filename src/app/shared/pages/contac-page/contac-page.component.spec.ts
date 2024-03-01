import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacPageComponent } from './contac-page.component';

describe('ContacPageComponent', () => {
  let component: ContacPageComponent;
  let fixture: ComponentFixture<ContacPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContacPageComponent]
    });
    fixture = TestBed.createComponent(ContacPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
