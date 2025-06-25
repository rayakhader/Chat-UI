import axiosInstance from '../axiosInstance';

export const sendMessage = async (content: string) => {
  const response = await axiosInstance.post('/chat/send', { content });
  return response.data;
};

export const getMessages = async () => {
  const response = await axiosInstance.get('/chat/messages');
  return response.data;
};
