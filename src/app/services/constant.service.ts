export class ConstantService {
  public LOGIN_AUTH: string;
  public API_ENDPOINT: string;
  public SOCKET_URL: string;
  public cloudinaryConfig = {
    cloudName: 'impnolife',
    uploadPreset: 'mspqunld'
  }

  constructor() {
    this.LOGIN_AUTH = "https://restaurantsass.herokuapp.com/";
    this.API_ENDPOINT = "https://restaurantsass.herokuapp.com/api/";
    this.SOCKET_URL = "https://restaurantsass.herokuapp.com/";

    // this.LOGIN_AUTH = "http://192.168.1.22:7000/";
    // this.API_ENDPOINT = "http://192.168.1.22:7000/api/";
    // this.SOCKET_URL = "http://192.168.1.22:7000/";

  }
}
