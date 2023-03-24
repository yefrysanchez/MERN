//basic JSON response for controllers

export type BasicResponse = {
  message: string;
};

//Error JSON response for controllers

export type ErrorResponse = {
  message: string;
  error: string;
};
