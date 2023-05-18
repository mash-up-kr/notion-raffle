import axios from "axios";

/**
 * APIBase를 상속받는 Class는 super의 인자를 통해 baseURL을 추가한다.
 * 상속받은 Class에서 handleResponse, handleError 인자를 통해서 then - catch 문을 이용하는 형태로 사용한다.
 */
class APIBase {
  baseHTTP;

  constructor(url = "") {
    this.baseHTTP = axios.create({
      baseURL: `${
        process.env.SERVER_BASE_URL ?? "http://localhost:3000/api"
      }/${url}`,
      timeout: 500000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static _handleResponse(response) {
    return response.data;
  }

  static _handleError(error) {
    if (axios.isAxiosError(error)) {
      // Access to config, request, and response
      throw new Error(error);
    } else {
      // Just a stock error
      throw new Error(error);
    }
  }
}

export default APIBase;
