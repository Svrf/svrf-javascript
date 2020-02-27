/**
 * Service for token storage and validation
*/
class TokenService {
  /**
   * @param {Storage} storage - Token storage
   * @param {string} tokenVersion - Version of token system. It's used to force re-authentication
   *                                in case something is changed in the auth process.
   */
  constructor(storage, tokenVersion) {
    /** @private */
    this.storage = storage;
    /** @private */
    this.version = tokenVersion;
  }

  /**
   * Check is token in storage valid or not
   * @returns {boolean} Is token valid or not
   */
  isTokenValid() {
    const {token, expiresAt, version} = this.getInfoFromStorage();
    const isTokenValid = token
      && version === this.version
      && expiresAt
      && (expiresAt > Date.now());

    return !!isTokenValid;
  }

  /**
   * Get token from storage
   * @returns {string} Token
   */
  getToken() {
    const {token} = this.getInfoFromStorage();
    return token;
  }

  /**
   * Set token info to storage
   * @param {{token: string, expiresAt: number}} tokenInfo - Token info
   */
  setTokenInfo({token, expiresAt}) {
    this.storage.set({token, expiresAt, version: this.version});
  }

  /**
   * Clear token info in storage
   */
  clearTokenInfo() {
    this.storage.clear();
  }

  /**
   * Get token info from storage
   * @returns {{token: string, expiresAt: number}} Token info
   */
  getInfoFromStorage() {
    return this.storage.get() || {};
  }
}

export default TokenService;
