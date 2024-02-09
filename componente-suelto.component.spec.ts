import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSueltoComponent } from './componente-suelto.component';

describe('ComponenteSueltoComponent', () => {
  let component: ComponenteSueltoComponent;
  let fixture: ComponentFixture<ComponenteSueltoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteSueltoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteSueltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
