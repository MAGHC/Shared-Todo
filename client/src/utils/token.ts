const TOKEN = 'token';

export default class TokenStorage {
  save(token: string) {
    localStorage.setItem(TOKEN, token);
  }
  get() {
    return localStorage.getItem(TOKEN);
  }
  clear() {
    localStorage.clear();
  }
}
