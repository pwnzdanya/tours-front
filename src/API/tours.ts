import { ITour } from '../store/tours/types';

import { apiConfig } from './index';

class ToursAPI {
  async getAll(): Promise<ITour[]> {
    const response = await apiConfig.get<{ data: ITour[] }>('/tours');
    return response.data.data;
  }
}

export default new ToursAPI();
