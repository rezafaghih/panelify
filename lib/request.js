import axios from "axios"

export class Request {
    
    /**
     * send post request for api request with payloads
     */
    static async Post (url, body, options = {}){
        try {
            const request = await axios.post(url, body, options);
            return request.data;
        }catch{
            throw{
                status:0,
                message:"Post Request Error"
            }
        }
    }

    /**
     * send get request for api request
     */
    static async Get(url, options = {}) {
        try {
          const response = await axios.get(url, {
            withCredentials: true,
            ...options,
          });
      
          return response.data;
        } catch (error) {
          if (error.response) {
            throw {
              status: error.response.status,
              message: error.response.data?.message || "Get Request Error",
            };
          }
      
          throw {
            status: 0,
            message: "Network Error",
          };
        }
      }
      

}