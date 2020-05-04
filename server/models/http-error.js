class HttpError {
  constructor(errorCode, message) {
    this.code = errorCode; // Adds a "code" prop on the instances of this class
    this.message = message;
  }
}

module.exports = HttpError;
