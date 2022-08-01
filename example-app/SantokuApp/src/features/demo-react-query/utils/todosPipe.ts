import {AxiosResponse} from 'axios';
import {ListTodoInfiniteResponse} from 'features/sandbox/apis/model';
import {InfiniteData} from 'react-query';

export const todosPipe = (data?: InfiniteData<AxiosResponse<ListTodoInfiniteResponse, any>>) => {
  if (data) {
    const pages = data.pages;
    return pages.map(page => page.data.content).flat();
  } else {
    return [];
  }
};
