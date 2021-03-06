import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { PrepaymentsTestModule } from '../../../../test.module';
import { PrepsMessageTokenComponent } from 'app/entities/preps/preps-message-token/preps-message-token.component';
import { PrepsMessageTokenService } from 'app/entities/preps/preps-message-token/preps-message-token.service';
import { PrepsMessageToken } from 'app/shared/model/preps/preps-message-token.model';

describe('Component Tests', () => {
  describe('PrepsMessageToken Management Component', () => {
    let comp: PrepsMessageTokenComponent;
    let fixture: ComponentFixture<PrepsMessageTokenComponent>;
    let service: PrepsMessageTokenService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [PrepaymentsTestModule],
        declarations: [PrepsMessageTokenComponent],
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
        .overrideTemplate(PrepsMessageTokenComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PrepsMessageTokenComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PrepsMessageTokenService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new PrepsMessageToken(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.prepsMessageTokens && comp.prepsMessageTokens[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new PrepsMessageToken(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.prepsMessageTokens && comp.prepsMessageTokens[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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
