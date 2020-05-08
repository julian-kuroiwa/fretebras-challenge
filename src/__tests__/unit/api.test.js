import api from '../../services/api';

describe('api', () => {
  let data;
  let city;

  beforeEach(() => {
    city = 'São Paulo';
    data = {
      id: '6709740',
      name: 'Mocotó',
      location: {
        address: 'Avenida Nossa Senhora do Loreto, 1100, Vila Maria, São Paulo',
      },
      user_rating: {
        aggregate_rating: '4.9',
      },
    };
    jest.spyOn(api, 'get').mockResolvedValueOnce(data);
  });

  afterEach(() => {
    jest.spyOn(api, 'get').mockRestore();
  });

  it('should be called once', async () => {
    await api.get(`/search?city_id=${city}`);

    expect(api.get).toHaveBeenCalledTimes(1);
  });

  it('should be called with expected url', async () => {
    await api.get(`/search?city_id=${city}`);
    expect(api.get).toHaveBeenCalledWith(`/search?city_id=${city}`);
  });

  it('should return reps from the specific city', async () => {
    const response = await api.get(`/search?city_id=${city}`);

    expect(response).toEqual(data);
  });

  it('should return error when rejects', () => {
    jest.spyOn(api, 'get').mockRejectedValue(new Error('Async error'));

    return api.get(city).catch((err) => {
      expect(err).toBeCalledWith(new Error('Async error'));
    });
  });
});
