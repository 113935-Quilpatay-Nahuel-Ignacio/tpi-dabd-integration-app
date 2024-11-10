import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Role } from '../models/role';
import { PaginatedResponse } from '../models/api-response';
import { TransformRolePipe } from '../pipes/role-mapper.pipe';
import { toCamelCase } from '../utils/owner-helper';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  host: string = `${
    environment.production ? environment.apis.users : 'http://localhost:8015'
  }/roles`;

  constructor(private http: HttpClient) {}

  getRole(id: number): Observable<Role> {
    return this.http.get<any>(`${this.host}/${id}`).pipe(
      map((role: any) => {
        return new TransformRolePipe().transform(role);
      })
    );
  }

  getAllRoles(
    page: number,
    size: number,
    isActive?: boolean
  ): Observable<PaginatedResponse<Role>> {
    let params = new HttpParams()
      .set('page', page >= 0 ? page.toString() : '0')
      .set('size', size.toString());

    if (isActive !== undefined) {
      params = params.append('isActive', isActive);
    }

    const headers = new HttpHeaders({
      'x-user-id': '1', //TODO: agregar id de user logueado
    });

    return this.http
      .get<PaginatedResponse<Role>>(this.host, { params, headers })
      .pipe(
        map((response: PaginatedResponse<any>) => {
          const transformedRoles = response.content.map((role: any) =>
            new TransformRolePipe().transform(role)
          );
          return {
            ...response,
            content: transformedRoles,
          };
        })
      );
  }

  createRole(role: Role, userId: number): Observable<Role> {
    const headers = new HttpHeaders({
      'x-user-id': userId,
    });

    return this.http.post<Role>(this.host, role, { headers });
  }

  updateRole(id: number, role: Role, userId: number): Observable<Role> {
    const headers = new HttpHeaders({
      'x-user-id': userId,
    });

    return this.http.put<Role>(`${this.host}/${id}`, role, { headers });
  }

  deleteRole(id: number, userId: number): Observable<void> {
    const headers = new HttpHeaders({
      'x-user-id': userId,
    });
    return this.http.delete<void>(`${this.host}/${id}`, { headers });
  }

  reactiveRole(id: number, userId: number): Observable<void> {
    const headers = new HttpHeaders({
      'x-user-id': userId,
    });
    return this.http.patch<void>(`${this.host}/${id}`, {}, { headers });
  }

  dinamicFilters(page: number, size: number, params: any) {
    let httpParams = new HttpParams()
      .set('page', page >= 0 ? page.toString() : '0')
      .set('size', size.toString());

    for (const key in params) {
      if (
        params.hasOwnProperty(key) &&
        params[key] !== undefined &&
        params[key] !== ''
      ) {
        httpParams = httpParams.set(key, params[key].toString());
      }
    }

    return this.http
      .get<PaginatedResponse<Role>>(`${this.host}/filters`, {
        params: httpParams,
      })
      .pipe(
        map((data: any) => {
          return toCamelCase(data);
        })
      );
  }
}
