import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugesComponent } from './gauges.component';

describe('GaugesComponent', () => {
  let component: GaugesComponent;
  let fixture: ComponentFixture<GaugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaugesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
