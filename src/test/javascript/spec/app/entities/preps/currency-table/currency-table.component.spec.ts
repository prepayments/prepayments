import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { PrepaymentsTestModule } from '../../../../test.module';
import { CurrencyTableComponent } from 'app/entities/preps/currency-table/currency-table.component';
import { CurrencyTableService } from 'app/entities/preps/currency-table/currency-table.service';
import { CurrencyTable } from 'app/shared/model/preps/currency-table.model';

describe('Component Tests', () => {
  describe('CurrencyTable Management Component', () => {
    let comp: CurrencyTableComponent;
    let fixture: ComponentFixture<CurrencyTableComponent>;
    let service: CurrencyTableService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [PrepaymentsTestModule],
        declarations: [CurrencyTableComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              data: of({
                defaultSort: 'id,asc',
              }),
              queryParamMap: of(
                convertToParamMap({
                  page: '1',
                  size: '1',
                  sort: 'id,desc',
                })
              ),
            },
          },
        ],
      })
        .overrideTemplate(CurrencyTableComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CurrencyTableComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CurrencyTableService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new CurrencyTable(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.currencyTables && comp.currencyTables[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new CurrencyTable(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.currencyTables && comp.currencyTables[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should calculate the sort attribute for an id', () => {
      // WHEN
      comp.ngOnInit();
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['id,desc']);
    });

    it('should calculate the sort attribute for a non-id attribute', () => {
      // INIT
      comp.ngOnInit();

      // GIVEN
      comp.predicate = 'name';

      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['name,desc', 'id']);
    });
  });
});
