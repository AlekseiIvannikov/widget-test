import { Filter } from '../types';

export const mockList = Array.from({ length: 300 }, (_, i) => i + 1);

export const mockListMoreThanTen = mockList.slice(10);
export const mockListMoreThanOneHundred = mockList.slice(100);
export const mockListMoreThanTwoHundred = mockList.slice(200);

export const prefilteredListsMap: Record<Filter, number[]> = {
  '>10': mockListMoreThanTen,
  '>100': mockListMoreThanOneHundred,
  '>200': mockListMoreThanTwoHundred,
  None: mockList,
};
