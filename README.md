# Case-1-20MinCoach
### Instituto Tecnológico de Costa Rica
### Escuela de Ingeniería en Computación

### Students
- Alexander Brenes Garita - 2018191805
- Andres Baldi Mora
- Lindsay Nahome Marín Sánchez - 2024163904

### Course
Software Design

### Group: 6

### Delivery date: 
September 27, 2025

---
## 1. Introduction
This repository includes a collection of proof of concepts. It serves as a guide for building the designated software. There are some code samples in the /src. folder, and diagrams in the /diagrams folder. Make use of this document to see a more exhaustive specification of the project.

This document details the architecture for the coaching platform 20minCoach. A system that allows connection with professionals from a variety of areas on short video sessions. The document describes necessary aspects for the correct implementation of the software. Among these are the decisions that back up the design, instructions and explanations for the proof of concepts, descriptions for all the modules, and other relevant information according to the section.

## 2. Scope
This iteration of the project contemplates the base functionalities for 20minCoach. A list of characteristics for the initial version of the design has been made:

- System documentation.
- Architecture diagram.
- Class diagram.
- Technology evaluation.
- UI and UX tests.
- Authorization and authentication tests.

## 3. Project installation
This section provides the instructions to set up the development environment and run the project locally. Ensure you meet all prerequisites before proceeding with the installation steps.
#### Prerequisites:
-	Node.js
-	Visual Studio Code
- React
-	Vite
#### Instructions to download the repository.
1.	Clone the repository.
```sh
git clone <repo-url>
cd <repo-folder>
```
2.   Install dependencies (run from the project root).
```sh
npm install
```
3.	Run the project:
```sh
npm run dev
```
4.	Additionally, install these commonly required packages locally if absent:
```sh
npm install --save-dev eslint vite @vitejs/plugin-react eslint-plugin-react eslint-plugin-react-hooks
```

You are all set to start the implementation of 20minCoach.

## 4. Frontend components


### 4.1 Visual components

### 4.2 Controllers

### 4.3 Model
Main classes included in the system:

- User.
- Coach.
- Subscription.
- Session.
- Review.

### 4.4 Middleware

- Logs.
- Permission validation
- Error handling.

### 4.5 Business
This layer enforces all the business rules for 20minCoach. Inside, there are multiple classes that follow a nomenclature of “[domain] + Policy”. There is no object design pattern since every policy class is its own catalog with methods that verify business rules are being followed.

Business policies receive requests from the model layer, and communicate with the services layer.

The system domain circles around the classes proposed for the model.
- CommonUser
- CoachUser
- Session
- Subscription
- Review
- Payment
- Notification

Each of these areas use policies that mirror the business rules. Here is a list of the business rules that the system will work with:

##### Common User policies
- User passwords are encrypted.
##### Coach User policies
- Coaches are able to activate and deactivate availability at any given time.
##### Session policies
- The time limit for every session is 20min. Sessions cut after that time.
- When there is one minute left, the app notifies both users in the session.
- The app connects you to the closest coach according to your location.
- Coaches who are not online must not appear during searches.
- The session starts when both user and coach hit connect.
##### Subsription policies
- The user can cancel subscriptions at any given time.
- The starter package subscription gives the right for 2 sessions every month.
- The pro package subscription gives the right for 8 sessions every month.
- Sessions not used do not accumulate for next month.
##### Review policies
- A user can only review a coach after a session.
##### Payment policies
- 20minCoach gains a 40% of the payment for every starter package subscription. -> $11.99 netIncome -> $5.99 for 2 sessions
- 20minCoach gains a 20% of the payment for every pro package subscription. -> $47.99 netIncome -> $5.99 for 8 sessions
- Coaches gain $3.60 per session at a minimum (1 star).
- Coaches gains per session increase by 0.60 cents for each star, going to a maximum of $5.99 at 5 stars.
##### Notification policies
- The coach receives a notification when the user tries to connect.
- A request for connection lasts 10min, after that, it expires.

Business rules might change along the system’s lifespan. Their modifications must be done only through the business layer.

### 4.6 Services

All services will be kept in their own folder, except the security module, which will be separate from this one.

The system integrates several third-party APIs to provide its services to the user. As such, the services layer includes an abstract class to generalize the creation of API services. All API services inherit from APITemplate.js for consistency:
```js
class APITemplate {
  apiKey = '';
  baseUrl = '';
  headers = [];
  configuration = {};

  // Base configuration for API services
  constructor() {
    
  }
   // Create and configure HTTP client instance
  initialize() {

  }
}
```

At the moment, the only implementation is the security and logging service. However, a plan has been established to decide the specific clients that the web app will use. The following section justifies the decisions made for service technology, prioritizing pricing and features.

#### Concrete services:

##### Notification service
For notifications, the API selected is OneSignal. It has a free plan which includes unlimited mobile push & web push for up to 10,000 subscribers.
##### Payment service
A variety of payment methods must be included in the system. An abstract parent class is used to create different payment methods that can be configured separately.
##### Security service
In order to manage user roles and permissions, Auth0 will be integrated in the system. It manages must security processes on its own, assuring protection to coaches and common users’ data.
##### Video session service
The service Daily.co allows 20minCoach to connect users and coaches in video sessions. It is compatible with react and negotiates a reasonable price of $0.0015 per videocall. Since 20minCoach gives 8 sessions per month at maximum, payments won’t be excessive.
##### Geolocation service
Due to its easy integration, Google Maps API will be used for this project. It is specially useful to connect users according to their proximity by calculating distances.
##### Image storage service
Cloudinary is the API proposed for saving avatar and portfolio images. It includes 25 GB of storage with its free plan.
##### Log service
Sentry will register logs on the web app and save them for a 2-year period. Its subscription is different because it escalates by plans and not by storage usage.

### 4.7 Background jobs

### 4.8 Validators

### 4.9 State management

### 4.10 Styles
The design we chose to create the page is a Moder UI Design widely used in modern pages of 2025, which has the following characteristics:

#### Design System:
Link of the page: [Pagina Web](https://20mincoach-six.vercel.app/)

We wanted to use a consistent design with semantic tokens for colors, typography, and spacing.

- **Color palette:** blue tones were used for night mode and day mode, and bright colors were used for the buttons and text to attract the customer's attention and encourage them to click on the buttons we want them to click on.
We focused on using green so that customers would concentrate more on the information on the button/text, and red so that they would not give it much importance (such as price or duration).

##### Paleta De Colores Nocturno
![Paleta De Colores Nocturno](img/paletaDeColores.jpg)

##### Paleta De Colores Dia
![Paleta De Colores Dia](img/paletaDeColoresBlanca.jpg)

- **Typography:** A modern **sans-serif** font was used for the typography, as it is one of the most widely used fonts on websites in 2025.
**Roboto** was used to complement the sans-serif font, giving the website a modern and simple touch. Incidentally, this typography is common for projects that use Vite. 

##### Sans-Serif
![Sans-Serif](img/sans-serif.jpg)

##### Roboto
![Roboto](img/sans-serifRoboto.jpg)

- **Spacing:** To give the page enough space so that it looks like a clean design with sections. For the CSS, a space of:

#### Vertical sections
```css
py-12
```
#### Horizontal padding
```css
px-6
```
#### Between elements (gap)
```css
gap-4
```

- **Semantics:** A classic structure is used on web pages in 2025. With a hierarchy of buttons to attract the customer's attention.
  - Header: logo + simple navigation.
  - Hero: large title, explanatory text.
  - Features: cards with icons/titles/text, organized in a responsive grid.
  - Secondary CTA: section with alternative background + highlighted button.
  - Footer: minimalist with secondary links.


#### Design System:
The shadcn/ui library was used, which is compatible with the TypeScript programming language and easy to integrate with Tailwind CSS.
It is a simple and modern design.

![Design System](img/shadcn.png)

#### Responsive Design:
By using Tailwind CSS, the design is responsive for mobile devices and adapts to the screen size.

![Responsive Mobile](img/responsiveMobile.jpg)

#### Professional SaaS:
Since the goal is to offer a specialized service to help customers, we have implemented a system called Saas, which we configure, customize, and implement on our website in order to sell our product to customers in the fastest and most efficient way possible.

#### Dark/Light Mode:

##### Dark Mode
![Dark mode](img/Dark.jpg)

##### Light Mode
![Light Mode](img/Light.jpg)

#### Card-based Layout: 
Card-based design for organizing content
![Cards](img/Cards.jpg)

### 4.11 Utilities

### 4.12 Exception Handling

Every error the system throws must be managed from the exception handling layer.

In order to log errors in the program, use the ExceptionHandler.js Singleton given in the [exceptionHandling folder]( src/exceptionHandling). 
#### Imports:
For standard javascript code, only [ExceptionHandler.js](src/exceptionHandling) should be exported. 
```js
import exceptionHandler from '../exceptionHandling/exceptionHandler';
```
For React components, import the [useExceptionHandler.js](src/hooks/useExceptionHandler.js) hook:
```js
import { useExceptionHandler } from '../hooks/useExceptionHandler.js';
```
#### Validator example:
A validator using the exception handler must do the same as the following.
```js
import { z } from 'zod';
import exceptionHandler from '../exceptionHandling/exceptionHandler'; // IMPORT THE CLASS

export class CommonUserValidator extends IValidator {
  createValidator() {
    return z.object({
      firstName: z.string().min(1, { message: "USER-001" }), // SPECIFY POSSIBLE EXCEPTIONS PER FIELD WHEN USING ZOD
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
    } catch (error) {          // CATCH ANY ERROR TYPE
      if (error instanceof z.ZodError) {
        // PICK THE FIRST ERROR WHEN WORKING WITH ZOD
        const firstError = error.errors[0];
        const errorCode = firstError.message;
        // USE EXCEPTION HANDLER TO GET A MORE STRUCTURED RESPONSE
        const errorResponse = exceptionHandler.handleException(errorCode);
        
        return {
          success: false,
          error: errorResponse
        };
      }
      
      throw error; // Safety net for unexpected errors
    }
  }
}

export default CommonUserValidator;
```
#### React component example:
A React component that uses the exceptionHandler follows a similar pattern, the main difference is the import being the hook useExceptionHandler.js found in the [hooks folder]( src/hooks):
```js
import { useExceptionHandler } from '../hooks/useExceptionHandler.js';   // IMPORT THE HOOK

function DemoLogs() {
  const exceptionHandler = useExceptionHandler('DemoLogs');         // CREATE A HOOK INSTANCE

  const onSubmit = (formData) => { 
    const result = userValidator.validate(formData);
    if (!result.success) {          // CATCH ANY ERROR PRODUCED
// USE EXCEPTION HANDLER TO GET A MORE STRUCTURED RESPONSE
      setError(result.error.userMessage); // Show to user
    }
  };

return (
    <form onSubmit={onSubmit}>
      {error && <div className="error">{error}</div>}
      {/* form fields */}
    </form>
  );
}
```
#### Exception Catalog:
The handler uses a manual called the [ExceptionCatalog.js]( src/exceptionHandling/ExceptionCatalog.js), which is a dictionary that maps error codes to their corresponding information.
An entry of the exception catalog may look like this:
```js
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
// … Other entries
```

If an error code that does not exist gets sent to the exception handler, the message will be default to code UNKNOWN-001. This is a fallback message for errors in general.

You may expand the catalog through the development process. Following the template. Divide the sections of the catalog per domain.


### 4.13 Logging
This layer records actions performed by users, services, and the system. It can receive requests from any layer of the program.

The Logger uses the Strategy pattern to support different logging methods (e.g., console, Sentry, local storage). This allows for different log presentation and storage of log entries.

The logging folder includes these components: 
-	Logger: The main class that brings the log method.
-	ILoggerStrategy: Interface that manages the current strategy of the Logger.
-	ConsoleStrategy, SentryStrategy, etc.: Multiple logging providers which implement the log() method in a different way.
-	LogLevel: An enumeration class that defines log severity levels. There are six distinct log levels, each with a specific purpose:
    -	TRACE: Captures detailed steps of a process during debugging. Use only with the ConsoleStrategy.
    -	DEBUG: Diagnoses errors by logging specific moments in a procedure during development. Use only with the ConsoleStrategy.
    -	INFO: Records successful operations and general system events (e.g., "login successful").
    -	WARN: Used for non-critical issues that don't interrupt the flow of execution (e.g., user input validation errors).
    -	ERROR: For failures that affect functionality and imply a greater risk (e.g., failed API calls).
    -	FATAL: For critical failures that compromise the system's integrity or availability.

#### Implementation:

The Logger.js file should be exported. The logger is pre-initialized upon import.

For standard code (inside a folder):
```js
import logger from '../logging/Logger';
import { LogLevel } from '../logging/LogLevel';
```
For React components, import the hook:
```js
import { useLogger } from './useLogger';
```
#### How to use:
The Logger class has a general log() method. The call format is:
```js
logger.log('strategy', LogLevel.WARN, logInfo);
```

In react components, the useLogger  hook provides convenience methods that omit the LogLevel parameter:
```js
debug('strategy', logInfo);
info('strategy', logInfo);
warn('strategy', logInfo);
error('strategy', logInfo);
fatal('strategy', logInfo);
```
The logInfo parameter is an object that must include the following obligatory fields:
```js
let logInfo = {
    level: 'WARN', // Obligatory
    message: 'Validation failed', // Obligatory
    // … Additional optional values
};
```
Additional values can be included as needed for specific log types.

Unlike the exception handler, the logger does not return any value.

#### Sentry:
Sentry is the primary logging service. It provides a cost-effective alternative to services like AWS Cloudwatch or Google Cloud Logging since the pricing increments by tier and not by storage amount. The subscription plan for this project is the Team plan ($26 dollars a month), which allows for collaborators to view the dashboard, unlimited memory, and tracing features.

To access the platform, you have to create a Sentry account and ask for the respective credentials to be added to the logger project.

Logs are stored in Sentry for a period of two years. After two years, logs are moved to local storage.

Sentry's website displays statistics for logged events. The main dashboard shows the most frequent and recent log types.

Selecting a specific log type provides detailed information: Log dates and frequency statistics, error traces and circumstances, and additional context data as given in the logger.


### 4.14 Security
Auth0


### 4.15 Linter configuration
The project uses ESLint as the linting tool. It includes predefined rules and conventions for code quality. The linter is not active by default and must be executed manually in the command line.

#### Implementation:
If the project is missing the eslint-plugin-react, run this command on the bash:
```sh
npm install eslint-plugin-react --save-dev
```

#### How to use:
Run the linter on JavaScript files and React files using the command:
```sh
npm run lint [filename.js]
```
It will show every rule violated that the project files contain.

All code must be examined through the linter tool to assure its quality. Both errors and warnings must be addressed to maintain code format and functionality.
#### Configuration:
Rules are defined in the eslint.config.mjs file. The configuration includes ESLint's recommended rule package. The complete list of available rules can be found in the [ESLint Rules Documentation](https://eslint.org/docs/latest/rules)

Custom rules can be implemented to enforce specific coding styles. The current iteration includes the no-spanish-symbols rule, which prohibits the use of the character "ñ" in variable names.

### 4.16 Build and deployment pipeline



## 5. Diagram

![Diagrama De Clases](diagrams/ClassDiagramImage.png)

Link:
[Diagrama De Clases](https://lucid.app/lucidchart/9f020ccb-4b82-433d-ac55-5505b58ee891/edit?beaconFlowId=BB83C63995B61803&invitationId=inv_33809063-0bdc-4f47-9466-e854b073f8f9&page=0_0#)





