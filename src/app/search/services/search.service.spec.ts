import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'ng2-toastr';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastModule.forRoot(),
      ],
      providers: [SearchService]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
