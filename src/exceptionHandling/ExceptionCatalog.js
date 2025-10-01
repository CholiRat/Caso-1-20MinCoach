// This class registers every error in the application with a unique code and a message.

const ExceptionCatalog = new Map([

    // **********************
    // Validation Errors
    // **********************

    ['VALIDATION_001', {
    level: 'WARN',
    message: 'Validation failed for user input',
    userMessage: 'Please verify the provided data.',
  }],
  ['VALIDATION_002', {
    level: 'WARN',
    message: 'Invalid email format provided',
    userMessage: 'The email is not valid.',
  }],

    // **********************
    // Business Logic Errors
    // **********************

  ['BUSINESS_001', {
    level: 'WARN',
    message: 'Coach not available for requested time',
    userMessage: 'Coach not available at this time.',
  }],
  ['BUSINESS_002', {
    level: 'WARN',
    message: 'User session limit exceeded',
    userMessage: 'You have exceeded your session limit.',
  }],
  ['BUSINESS_003', {
    level: 'ERROR',
    message: 'Payment processing failed.',
    userMessage: 'Payment processing failed.',
  }],

    // **********************
    // Fallback Errors
    // **********************

  ['UNKNOWN_001', {
    level: 'ERROR',
    message: 'Unknown error occurred.',
    userMessage: 'Something went wrong. Please, try again.',
  }]


]);

export default ExceptionCatalog;