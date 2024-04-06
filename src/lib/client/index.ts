import { sendPostRequest, sendDeleteRequest, sendGetRequest, sendPutRequest} from "@/lib/util/request"
import { Response, getResponse } from "@/lib/util/response"

import { IUser } from "@/lib/util/types/user"

import { USER_CREATE, USER_DELETE, USER_GET, USER_GET_BY_ID, USER_UPDATE } from "./const";

export class Client{
  headers = {
    "content-type":"application/json"
  };
  userCreate(body:IUser): Promise<Response>{
    return this.handleResponse(
      sendPostRequest(USER_CREATE(),this.getDefaultHeaders(),{},body)
    )
  }
  userGet(): Promise<Response>{
    return this.handleResponse(
      sendGetRequest(USER_GET(),this.getDefaultHeaders(),{})
    )
  }
  userGetById(id:string): Promise<Response>{
    return this.handleResponse(
      sendGetRequest(USER_GET_BY_ID(id),this.getDefaultHeaders(),id)
    )
  }
  userDelete(id:string): Promise<Response>{
    return this.handleResponse(
      sendDeleteRequest(USER_DELETE(id),this.getDefaultHeaders(),id)
    )
  }
  userUpdate(id:string): Promise<Response>{
    return this.handleResponse(
      sendDeleteRequest(USER_UPDATE(id),this.getDefaultHeaders(),id)
    )
  }

  async handleResponse(request: Promise<any>): Promise<Response>{
    try{
      const response = await request;
      return response
    }catch(e){
      return getResponse(e,"GEN1")
    }
  }
  getDefaultHeaders(includeAuth = true): any {
    if (includeAuth && typeof window != "undefined") {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
        return {
          ...this.headers,
          authorization: `bearer ${authToken}`,
        };
      }
    }

    return { ...this.headers };
  }
}