const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  const isDev = process.env.NODE_ENV === 'development'

  res.status(statusCode).json({
    success: false,
    message,
    ...(isDev && {
      error: err,
      stack: err.stack
    })
  })
}

export default errorHandler
