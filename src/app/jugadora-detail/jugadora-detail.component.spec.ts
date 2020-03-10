import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JugadoraDetailComponent } from "./jugadora-detail.component";

describe("JugadoraDetailComponent", () => {
  let component: JugadoraDetailComponent;
  let fixture: ComponentFixture<JugadoraDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JugadoraDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
