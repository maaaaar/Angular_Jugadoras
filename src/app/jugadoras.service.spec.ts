import { TestBed } from '@angular/core/testing';

import { JugadorasService } from './jugadoras.service';

describe('JugadorasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JugadorasService = TestBed.get(JugadorasService);
    expect(service).toBeTruthy();
  });
});
