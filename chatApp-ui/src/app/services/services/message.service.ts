/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAllMessages } from '../fn/message-controller/get-all-messages';
import { GetAllMessages$Params } from '../fn/message-controller/get-all-messages';
import { MessageResponse } from '../models/message-response';
import { saveMessage } from '../fn/message-controller/save-message';
import { SaveMessage$Params } from '../fn/message-controller/save-message';
import { setMessageToSeen } from '../fn/message-controller/set-message-to-seen';
import { SetMessageToSeen$Params } from '../fn/message-controller/set-message-to-seen';
import { uploadMedia } from '../fn/message-controller/upload-media';
import { UploadMedia$Params } from '../fn/message-controller/upload-media';

@Injectable({ providedIn: 'root' })
export class MessageService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveMessage()` */
  static readonly SaveMessagePath = '/api/v1/messages';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveMessage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveMessage$Response(params: SaveMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return saveMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveMessage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveMessage(params: SaveMessage$Params, context?: HttpContext): Observable<void> {
    return this.saveMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `setMessageToSeen()` */
  static readonly SetMessageToSeenPath = '/api/v1/messages';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setMessageToSeen()` instead.
   *
   * This method doesn't expect any request body.
   */
  setMessageToSeen$Response(params: SetMessageToSeen$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return setMessageToSeen(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `setMessageToSeen$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  setMessageToSeen(params: SetMessageToSeen$Params, context?: HttpContext): Observable<void> {
    return this.setMessageToSeen$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `uploadMedia()` */
  static readonly UploadMediaPath = '/api/v1/messages/upload-media';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadMedia()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadMedia$Response(params: UploadMedia$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return uploadMedia(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadMedia$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadMedia(params: UploadMedia$Params, context?: HttpContext): Observable<void> {
    return this.uploadMedia$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllMessages()` */
  static readonly GetAllMessagesPath = '/api/v1/messages/chat/{chat-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllMessages()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMessages$Response(params: GetAllMessages$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MessageResponse>>> {
    return getAllMessages(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllMessages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMessages(params: GetAllMessages$Params, context?: HttpContext): Observable<Array<MessageResponse>> {
    return this.getAllMessages$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MessageResponse>>): Array<MessageResponse> => r.body)
    );
  }

}
