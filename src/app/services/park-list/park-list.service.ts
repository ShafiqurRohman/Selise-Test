import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCrudService } from '../base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ParkListService extends BaseCrudService {

  constructor(
    public http: HttpClient
  ) {
    super("park-list", http);
  }


}
