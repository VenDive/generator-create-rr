import {onGetToken, request, setupInterceptors, onGetHeaders} from '../../utils/libs/axios';

describe('axios' , () => {

  it('should return token', () => {
    const token = onGetToken();
    expect(token).toEqual('token')
  });

  it('should throw error for onGetHeaders function', () => {
    const error = 'request func internal onGetHeaders arg @param type is missing';
    expect(onGetHeaders).toThrow(error)
  });

  it('should return header for type public', () => {
    const headers = onGetHeaders('public');
    expect(headers).toEqual({ 'Content-Type': 'application/json' })
  });

  it('should return header for type authorization', () => {
    const headers = onGetHeaders('authorization');
    const expectedHeaders = {
      authorization: "Bearer token",
      time_zone: "GMT+0500",
    }
    expect(headers).toEqual(expectedHeaders);
  });

  it('should throw error url is missing', async () => {

    const error = 'request func arg @param url is missing'
    expect(request({})).rejects.toEqual(new Error(error));

  });

  it('should throw error method is missing', async () => {
    const url = 'url';
    const error = 'request func arg @param method is missing. Valid options "GET"|"POST"|"PUT" etc'
    expect(request({ url})).rejects.toEqual(new Error(error));

  });

})
