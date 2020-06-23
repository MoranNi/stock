import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentStockComponent } from './present-stock.component';

describe('PresentStockComponent', () => {
  let component: PresentStockComponent;
  let fixture: ComponentFixture<PresentStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
