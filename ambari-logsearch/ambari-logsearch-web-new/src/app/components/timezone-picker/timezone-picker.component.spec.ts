/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Http} from '@angular/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {StoreModule} from '@ngrx/store';
import {AppSettingsService, appSettings} from '@app/services/storage/app-settings.service';
import {ComponentActionsService} from '@app/services/component-actions.service';
import {TimeZoneAbbrPipe} from '@app/pipes/timezone-abbr.pipe';
import {ModalComponent} from '@app/components/modal/modal.component';

import {TimeZonePickerComponent} from './timezone-picker.component';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

describe('TimeZonePickerComponent', () => {
  let component: TimeZonePickerComponent;
  let fixture: ComponentFixture<TimeZonePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimeZonePickerComponent,
        ModalComponent,
        TimeZoneAbbrPipe
      ],
      imports: [
        StoreModule.provideStore({
          appSettings
        }),
        TranslateModule.forRoot({
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [Http]
        })
      ],
      providers: [
        AppSettingsService,
        ComponentActionsService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeZonePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
