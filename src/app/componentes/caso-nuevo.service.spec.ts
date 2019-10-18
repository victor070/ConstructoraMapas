import { TestBed } from '@angular/core/testing';

import { CasoNuevoService } from './caso-nuevo.service';

describe('CasoNuevoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasoNuevoService = TestBed.get(CasoNuevoService);
    expect(service).toBeTruthy();
  });
});
