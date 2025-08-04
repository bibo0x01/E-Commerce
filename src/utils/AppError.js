class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true // ده بيفيد لو هتتعامل مع أخطاء متوقعة وغير متوقعة
    Error.captureStackTrace(this, this.constructor)
  }
}

export default AppError
