import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoNuevoComponent } from './caso-nuevo.component';

describe('CasoNuevoComponent', () => {
  let component: CasoNuevoComponent;
  let fixture: ComponentFixture<CasoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
