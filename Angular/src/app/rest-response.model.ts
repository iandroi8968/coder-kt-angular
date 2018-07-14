export interface RestResponse {
    messages : Array<String>[];
    result : Array<Result>[];
  }
  
  export interface Result {
    name : String;
    alpha2_code : String;
    alpha3_code : String;
  }