import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbComponent } from './gb.component';

describe('GbComponent', () => {
  let component: GbComponent;
  let fixture: ComponentFixture<GbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
