import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilscardComponent } from './wilscard.component';

describe('WilscardComponent', () => {
  let component: WilscardComponent;
  let fixture: ComponentFixture<WilscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WilscardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WilscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
