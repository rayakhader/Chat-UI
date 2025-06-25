import type { AxiosInstance } from 'axios';

export function setupInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      const lang = localStorage.getItem('i18nextLng') || 'en';
      config.headers.Authorization = token ? `Bearer ${token}` : '';
      config.headers['Accept-Language'] = lang;
      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.warn('Unauthorized – redirect or logout');
      }
      return Promise.reject(error);
    }
  );
}
