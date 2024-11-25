import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOnBtnClickComponent } from './filter-on-btn-click.component';

describe('FilterOnBtnClickComponent', () => {
  let component: FilterOnBtnClickComponent;
  let fixture: ComponentFixture<FilterOnBtnClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterOnBtnClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterOnBtnClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
