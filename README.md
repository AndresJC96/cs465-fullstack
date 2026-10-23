# CS 465 Full Stack Development – Travlr Getaways

## Project Overview

For this course, I developed a full stack web application called Travlr Getaways. The application includes a customer-facing travel website and an administrative single-page application (SPA) that allows authorized users to manage trip information. Throughout the course, I worked with technologies such as Express, Node.js, Angular, MongoDB, and JavaScript to connect the frontend and backend. I also implemented security features to protect the administrative side of the application.

## Architecture

**Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).**

Throughout this project, I worked with different approaches to frontend development. The customer-facing website used Express to serve HTML pages, while JavaScript helped provide functionality and connect different parts of the application. The administrative side used Angular to create a single-page application. One major difference I noticed is that the SPA can update content without needing to reload the entire page. This makes it more interactive and useful for managing trip information. Both approaches were useful, but they served different purposes within the project.

**Why did the backend use a NoSQL MongoDB database?**

MongoDB was used because it provides a flexible way to store and manage information. Unlike a traditional relational database, MongoDB stores data in documents that work well with JSON-like structures. This was helpful for storing trip information because the application needed to retrieve, add, and update records. MongoDB also worked well with Node.js and Express, making it easier to connect the database to the backend API.

## Functionality

**How is JSON different from JavaScript, and how does JSON tie together the frontend and backend development pieces?**

JavaScript is a programming language used to create functionality and interactive features, while JSON is a format used to organize and exchange data. JSON was important throughout this project because it allowed the frontend and backend to communicate. For example, when the administrative application requested trip information, the backend could retrieve the data from MongoDB and return it in JSON format. Angular could then use that information to display the trips to the administrator.

**Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.**

One example of refactoring during this project was organizing the application using the MVC structure. Separating the models, views, and controllers made the code easier to understand and maintain. I also worked with Angular components and services to organize the administrative application. For example, the TripDataService helped manage API requests for retrieving, adding, and updating trips instead of repeating that code throughout the application. Reusable UI components also make development more efficient because the same functionality can be used in multiple places. This helps keep the application consistent and makes future changes easier.

## Testing

**Explain your understanding of methods, endpoints, and security in a full stack application.**

Testing was an important part of making sure the frontend, backend, and database worked together correctly. API endpoints allow different parts of the application to communicate, while HTTP methods determine what action is being performed. For example, GET requests retrieve trip information, POST requests add new information, and PUT requests update existing records. Testing these endpoints helps confirm that the application sends and receives the expected data.

Adding security made testing more complicated because protected endpoints require authentication. The administrative login needed to verify a user's credentials before allowing access to certain features. This meant it was important to test both authorized and unauthorized requests to make sure the security features worked correctly. I learned that testing is not only about making sure features work, but also making sure they are protected from unauthorized access.

## Reflection

**How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?**

This course helped me better understand how a complete web application is developed and how the different technologies work together. Before working on this project, I had experience with programming,
