import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

export abstract class BaseCrudService {
  public applyChanges = new Subject<any>();

  constructor(
    public commonRoute: string,
    public http: HttpClient 
  ) {
  }

  create(model: any) {
    return this.http.post<any>(`${environment.Base_Url}/${this.commonRoute}/create`, model);
  }

  update(model: any) {
    return this.http.post<any>(`${environment.Base_Url}/${this.commonRoute}/update`, model);
  }

  get(id: any) {
    return this.http.get<any>(`${environment.Base_Url}/${this.commonRoute}/get?id=${id}`);
  }

  delete(id: any) {
    return this.http.get<any>(`${environment.Base_Url}/${this.commonRoute}/delete?id=${id}`);
  }

  list() {
    return this.http.get<any>(`${environment.Base_Url}/${this.commonRoute}/list`);
  }
  
  getPagedList(pageNumber: number = 0, pageSize: number = 100, orderBy: string = 'id', direction: string = 'asc') {
    return this.http.get<any>(`${environment.Base_Url}/${this.commonRoute}/page-list?pageNumber=${pageNumber}&pageSize=${pageSize}&orderBy=${orderBy}&direction=${direction}`, { observe: 'response' });
  }

}
