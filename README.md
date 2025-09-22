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
## 1.Introduction
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

## 3. Frontend components


### 3.1 Visual components

### 3.2 Controllers

### 3.3 Model
Main classes included in the system:

- User.
- Coach.
- Subscription.
- Session.
- Review.

### 3.4 Middleware

- Logs.
- Permission validation
- Error handling.

### 3.5 Business
This layer enforces all the business rules for 20minCoach.

Here is a list of the business rules that the system will work with:

##### Coach connection policies
- The app connects you to the closest coach according to your location.
- Coaches who are not online must not appear during searches.
- Coaches are able to activate and deactivate availability at any given time.
- The session starts when both user and coach hit connect.
##### Notification policies
- The coach receives a notification when the user tries to connect.
- - A request for connection lasts 10min, after that, it expires.
##### Video session policies
- The time limit for every session is 20min. Sessions cut after that time.
- When there is one minute left, the app notifies both users in the session.
- A user can only review a coach after a session.
##### Subsription policies
- The user can cancel subscriptions at any given time.
##### Max sessions policies
- The starter package subscription gives the right for 2 sessions every month.
- The pro package subscription gives the right for 8 sessions every month.
- Sessions not used do not accumulate for next month.
##### Pricing policies
- 20minCoach gains a 40% of the payment for every starter package subscription. 
  -> $11.99 netIncome -> $5.99 for 2 sessions
- 20minCoach gains a 20% of the payment for every pro package subscription. 
  -> $47.99 netIncome -> $5.99 for 8 sessions
- Coaches gain $3.60 per session at a minimum (1 star).
- Coaches gains per session increase by 0.60 cents for each star, going to a maximum of $5.99 at 5 stars.
##### Security policies
- User passwords are encrypted.

### 3.6 Services
The platform depends on several APIs to provide its services to the user.

Here is a brief list of services that must be implemented.

##### Notification service
For notifications, the API selected is OneSignal.
##### Payment service
A variety of payment methods must be included in the system. A factory design is used to create different payment methods that can be configured separately. 
##### Security service
In order to manage user roles and permissions, Auth0 will be integrated in the system.
##### Video session service
The service Daily.co allows 20minCoach to connect users and coaches in video sessions. 
##### Geolocation service
Due to its easy integration, Google Maps API will be used for this project.
##### Image storage service
Cloudinary is the API proposed for saving avatar and portfolio images.
##### Log service
Cloudwatch Frontlogger will register logs on the web app and save them for a 2-year period.

### 3.7 Background jobs

### 3.8 Validators

### 3.9 State management

### 3.10 Styles

### 3.11 Utilities

### 3.12 Exception Handling

### 3.13 Logging

### 3.14 Security
Auth0
Se tiene que revisar esto

### 3.15 Linter configuration
ESLint

### 3.16 Build and deployment pipeline



## 4. Diagrams
Link:
[Diagrama De Clases](https://lucid.app/lucidchart/9f020ccb-4b82-433d-ac55-5505b58ee891/edit?beaconFlowId=BB83C63995B61803&invitationId=inv_33809063-0bdc-4f47-9466-e854b073f8f9&page=0_0#)





