export type Response = {
  [x: string]: any;
  data?: any;
  code: string;
  message: string;
  metadata: any;
};

export const getResponse = (
  data: any,
  code: string,
  metadata: any = {}
) => {
  const res: Response = {
    data,
    code,
    message: APIResponse[code],
    metadata,
  };
  return res;
};

export const APIResponse: Record<string, string> = {
  GEN0: "OK",
  GEN1: "Error",
  GEN2: "Unauthorized",
  
  USER0: "User is already Registered.",
};
