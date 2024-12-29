import { ApiResponse, create } from 'apisauce'
import cache from '../utils/cache'

const apiClient= create({
    baseURL: "http://192.168.124.138:9000/api"
})





const originalGet = apiClient.get;

// Override the `get` method
apiClient.get = async <T, U = T>(url: string, params?: {} | undefined, axiosConfig?: any): Promise<ApiResponse<T, U>> => {
  const response = await originalGet<T, U>(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const cachedData = await cache.get(url);
  if (cachedData) {
    return {
      ok: true,
      data: cachedData as T,
      problem: null,
      status: 200,
      headers: {},
      config: {},
      originalError: null,
    };
  }

  return response;
};

export default apiClient;
