class ApplicationError extends Error {
  static details() {
    return {};
  }

  toJSON() {
    return {
      error: {
        name: this.name,
        message: this.message,
        details: this.details,
      },
    };
  }
}

module.exports = ApplicationError;
