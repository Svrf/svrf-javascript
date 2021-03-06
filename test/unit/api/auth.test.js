import AuthApi from '../../../src/api/auth';
import HttpClient from '../../../src/http/http-client';
import TokenService from '../../../src/services/token';

jest.mock('../../../src/http/http-client');
jest.mock('../../../src/services/token');

const apiKey = 'api-key';
const token = 'token';
const expiresIn = 1234;

describe('AuthApi', () => {
  let api;
  let httpClient;
  let tokenService;

  beforeEach(() => {
    httpClient = new HttpClient();
    tokenService = new TokenService();
    api = new AuthApi(httpClient, tokenService, apiKey);

    tokenService.isTokenValid.mockReturnValue(false);
    httpClient.post.mockResolvedValue({token, expiresIn});
  });

  it('saves data that is passed to constructor', () => {
    expect(api.apiKey).toBe(apiKey);
    expect(api.httpClient).toBe(httpClient);
    expect(api.tokenService).toBe(tokenService);
  });

  it('does not perform request if there is valid token', async () => {
    tokenService.isTokenValid.mockReturnValue(true);

    await api.authenticate();

    expect(httpClient.post).not.toHaveBeenCalled();
  });

  it('throws an error if api key was not provided', async () => {
    delete api.apiKey;

    await expect(api.authenticate()).rejects.toThrowErrorMatchingSnapshot();
  });

  it('makes request with proper params', async () => {
    await api.authenticate();

    expect(httpClient.post).toHaveBeenCalledWith('/app/authenticate', {apiKey});
  });

  it('saves response to the storage', async () => {
    httpClient.post.mockResolvedValue({expiresIn, token});

    await api.authenticate();

    expect(tokenService.setAppTokenInfo).toHaveBeenCalledWith({appToken: token, expiresIn});
  });

  it('reuses existing promise if a request is in progress', () => {
    api.authenticate();
    api.authenticate();

    expect(httpClient.post).toHaveBeenCalledTimes(1);
  });

  it('does not reuse existing promise if there is no request in progress', async () => {
    await api.authenticate();
    await api.authenticate();

    expect(httpClient.post).toHaveBeenCalledTimes(2);
  });
});
