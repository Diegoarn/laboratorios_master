import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPublicMenuComponent } from './app-public-menu.component';

describe('AppPublicMenuComponent', () => {
  let component: AppPublicMenuComponent;
  let fixture: ComponentFixture<AppPublicMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPublicMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPublicMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
