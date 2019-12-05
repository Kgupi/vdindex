import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiondreamLibComponent } from './visiondream-lib.component';

describe('VisiondreamLibComponent', () => {
  let component: VisiondreamLibComponent;
  let fixture: ComponentFixture<VisiondreamLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisiondreamLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiondreamLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
