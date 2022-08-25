import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrivateMenuComponent } from './app-private-menu.component';

describe('AppPrivateMenuComponent', () => {
  let component: AppPrivateMenuComponent;
  let fixture: ComponentFixture<AppPrivateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPrivateMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPrivateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
