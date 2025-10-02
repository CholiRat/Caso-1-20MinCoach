import { z } from 'zod';
import exceptionHandler from '../exceptionHandling/exceptionHandler';

export class CommonUserValidator extends IValidator {
  createValidator() {
    return z.object({
      firstName: z.string().min(1, { message: "USER-001" }),
      lastName: z.string().min(1, { message: "USER-002" }),
      avatarUrl: z.string().url({ message: "USER-003" }).optional().or(z.literal('')), 
      contacts: z.array(UserContactSchema).default([]), 
      totalSessions: z.number().int().nonnegative({ message: "USER-004" }).default(0), 
      availableSessions: z.number().int().min(0, { message: "USER-005" })
    });
  }

  validate(data) {
    try {
      const validator = this.createValidator();
      const validatedData = validator.parse(data);
      return {
        success: true,
        data: validatedData
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Pick up the first error code
        const firstError = error.errors[0];
        const errorCode = firstError.message;
        // Use the exception handler to get a structured error response
        const errorResponse = exceptionHandler.handleException(errorCode);
        
        return {
          success: false,
          error: errorResponse
        };
      }
      exceptionHandler.handleException('UNKNOWN-001');
    }
  }
}

export default CommonUserValidator;
