import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CabeceraRestService {
  constructor(private readonly _httpClient: HttpClient) {

  }
}
