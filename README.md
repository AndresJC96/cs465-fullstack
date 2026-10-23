# CS 465 – Full Stack Development
## Travlr Getaways

### Project Overview

For this course, I worked on a full stack web application called Travlr Getaways. The project included a customer-facing website and an administrative application that allows users to manage trip information. Throughout the course, I worked with JavaScript, Express, Angular, Node.js, and MongoDB to build and connect the different parts of the application. I also worked on adding security features to protect the administrative side.

### Architecture

**Compare and contrast the types of frontend development used in the project.**

Throughout this project, I worked with different types of frontend development. The customer-facing website used Express to serve HTML pages, while JavaScript helped with the functionality of the application. The administrative side used Angular to create a single-page application (SPA). One of the biggest differences is that the SPA can update information without having to reload the entire page. This makes it easier for administrators to manage trip information. Both approaches worked well for what they were designed to do.

**Why did the backend use a NoSQL MongoDB database?**

MongoDB was used because it provides a flexible way to store and manage data. Instead of using traditional tables, MongoDB stores information in documents. This worked well for the trip information because the application needed to retrieve, add, and update records. MongoDB also worked well with the other technologies used in the project, making it easier to connect the database to the backend.

### Functionality

**How is JSON different from JavaScript, and how does JSON connect the frontend and backend?**

JavaScript is a programming language used to create functionality, while JSON is a format used to store and exchange data. JSON helped connect the frontend and backend by allowing information to be sent between them. For example, when the administrative application requested trip information, the backend retrieved the information from MongoDB and returned it in JSON format. Angular then used that information to display the trips.

**Explain examples of refactoring and the benefits of reusable UI components.**

One example of refactoring during this project was organizing the code using the MVC structure. Separating the models, views, and controllers made the application easier to understand and maintain. I also used Angular components and services to help organize the administrative application. For example, the TripDataService handled API requests for retrieving, adding, and updating trips. This helped avoid repeating the same code in multiple places. Reusable components are helpful because they make the application more consistent and allow changes to be made without having to update everything individually.

### Testing

**Explain your understanding of methods, endpoints, and security in a full stack application.**

Testing was an important part of making sure the application worked correctly. API endpoints allow the frontend and backend to communicate, while HTTP methods determine what action is being performed. For example, GET requests retrieve information, POST requests add new records, and PUT requests update existing information.

Adding security made testing more complicated because certain features required authentication. The administrative login needed to verify user credentials before allowing access to protected features. This meant testing needed to account for both authorized and unauthorized requests. This helped me understand that testing is not just about making sure something works, but also making sure the application is secure.

### Reflection

**How has this course helped you reach your professional goals?**

This course helped me better understand how a full stack application works and how the different parts connect. Before this course, I had experience with programming, but working on this project gave me more hands-on experience with frontend and backend development.

I learned more about JavaScript, Express, Angular, MongoDB, API development, and authentication. I also improved my troubleshooting skills because there were times when things did not work the way I expected, and I had to figure out what was causing the problem.

As I continue working toward my computer science degree, I believe the skills I learned in this course will help prepare me for a career in software development. Having this project in my GitHub portfolio will also give me something to show potential employers and demonstrate what I have learned.
