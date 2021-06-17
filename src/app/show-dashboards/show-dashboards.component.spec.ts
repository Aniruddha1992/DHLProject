import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDashboardsComponent } from './show-dashboards.component';

describe('ShowDashboardsComponent', () => {
  let component: ShowDashboardsComponent;
  let fixture: ComponentFixture<ShowDashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDashboardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
