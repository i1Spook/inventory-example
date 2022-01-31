import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseSimaticDevice } from 'src/shared/DPM/baseSimaticDevice';
import { Observable } from 'rxjs';
import { BaseApiResult } from 'src/shared/DPM/baseApiResult';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DpmApiService {

  constructor(private http: HttpClient) { }

  private deviceUrl = 'api/Device';

  ngOnInit(): void {
  }

  getAllPc(): Observable<BaseApiResult> {
    return this.http.get<BaseApiResult>(this.deviceUrl + "/Pc")
  }
  
  getAllPlc(): Observable<BaseApiResult> {
    return this.http.get<BaseApiResult>(this.deviceUrl + "/Plc")
  }

  getAllPanel(): Observable<BaseApiResult> {
    return this.http.get<BaseApiResult>(this.deviceUrl + "/Panel")
  }
    
}
