import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasSampleComponent } from './canvas-sample.component';

describe('CanvasSampleComponent', () => {
  let component: CanvasSampleComponent;
  let fixture: ComponentFixture<CanvasSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
