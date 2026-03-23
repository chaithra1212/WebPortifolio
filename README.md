"• Understand Agile principles, values, and the key differences from the Waterfall methodology.
• Understand the roles, ceremonies, and artifacts within the Scrum framework.
• Participate effectively in Scrum ceremonies and utilize Scrum artifacts in project scenarios.
• Write clear and effective user stories with well-defined acceptance criteria."
• Apply the software engineering lifecycle by demonstrating competence in communication, planning, analysis, and maintenance activities required to support, troubleshoot, and sustain software systems in production environments."• Demonstrate the ability to use UNIX/Linux commands for file processing, directory organization, and applying appropriate security controls.
• Use essential UNIX utilities including filters (grep, sed), process management, and networking commands for system configuration and troubleshooting.
• Create basic shell scripts using correct syntax, variables, and functions, with the ability to handle errors and automate routine tasks."
*"• Understand common Git workflows, create and configure repositories, and perform basic operations such as git add, clone, checkout, push, and pull to manage code changes effectively.
• Apply branching strategies and perform merging and rebasing to support collaborative development and maintain clean version histories."**
"• Define HTML and common terminology related to HTML, recognize correct HTML syntax, be able to write a brief error-free HTML code.
• Apply style to an existing/new web page as per the requirement using CSS3.
• Write and employ JavaScript code to solve practical web design problems.
• Make responsive, cross-platform and modern websites using Bootstrap 5.
• Write type-safe and maintainable code using TypeScript features such as interfaces, enums, and generics.
• Integrate TypeScript into modern front-end frameworks (e.g., React or Angular) to enhance code reliability and developer productivity."
"• Understand relational database structure and design; write SQL queries to create, manipulate, and retrieve data using subqueries and joins.
• Create and manage stored procedures, user-defined functions, triggers, and cursors to implement business logic within the database.
• Implement exception handling in stored procedures to ensure robust execution and maintain data integrity during operations."

"• Use SOLID principles in Object-oriented software development
• Identify various types of UML diagrams, including structural, behavioral, and interaction diagrams.
• Understand how to create and analyze use case diagrams for capturing system requirements and interactions."
"• Explain Object-Relational Mapping (ORM) concepts, differentiate between EF Core and EF Framework, install EF Core packages, and configure DbContext to connect with SQL Server.
• Create entities with relationships (One-to-Many, Many-to-Many), manage schema changes and seed data using migrations, and perform CRUD operations using EF Core methods and LINQ queries.
• Implement loading strategies (eager, lazy, explicit), optimize query performance using AsNoTracking, caching, and compiled queries, and handle concurrency using RowVersion columns."
"• Set up the ASP.NET Core 8 MVC development environment and compare it with the traditional .NET Framework.
• Build basic MVC applications and explain the roles of controllers, views, and models in request handling.
• Create models with data annotations and develop strongly-typed views using Razor syntax and layout views.
• Implement form handling, model binding, and validation using Razor Pages and tag helpers.
• Perform CRUD operations with EF Core and configure services, routing, and deployment for different environments."
"• Set up a .NET 8 development environment and create a structured ASP.NET Core Web API project from scratch.
• Build RESTful API endpoints with controllers and routes, and perform CRUD operations using Entity Framework Core and migrations.
• Implement secure API access using JWT-based authentication, API keys, and OAuth protocols.
• Apply global exception handling and integrate structured logging using Serilog for traceability.
• Document and test APIs using Swagger, Postman, and REST Client tools for manual and automated validation."
"• Explain the fundamental concepts of microservices architecture, including the decoupling of services, individual scalability, API-based communication, and the benefits of microservices in software development.
• Design and implement microservices using ASP.NET Core, ensuring modularity, scalability, and independent deployment.
• Configure inter-service communication using REST APIs and message-based patterns (e.g., using RabbitMQ or Azure Service Bus)."
"• Explain what is Debugging and why do we need it
• Use Visual Studio Debugger that helps in navigating through code to inspect the state of an app and show its execution flow.
• Employ various debugging techniques during application development and maintenance."





Overview of ASP.NET Core 8 and .NET 8, ASP.NET Core vs .NET Framework, Installing SDKs and Setting up Visual Studio / VS Code
Introduction to Project Templates (MVC vs API vs Minimal APIs), Setting Up a Basic MVC Project, Project Structure Overview (Controllers, Views, Models, wwwroot)
Role of Models, Views, and Controllers, Lifecycle of a Request in an MVC Application
Creating Models with C# Classes, Strongly-Typed Views and ViewModel Patterns, Data Annotations and Validation
Creating and Registering Controllers, Handling Requests with Action Methods, Using Parameters in Controller Actions
Razor View Engine and Razor Syntax, Layout Views and Partial Views, Adding CSS and JavaScript Files
Convention-based Routing vs Attribute Routing, Route Constraints and Custom Routes, Generating URLs using Tag Helpers
"Designing Forms with Razor Pages, Handling Form Submission in Controllers, 
Model Binding and Model Validation"
Managing State with Session and Cookies, TempData and ViewData for Short-term Data Storage, Managing Authentication State
Configuring Database Connections, Performing CRUD Operations with EF Core, Using Migrations to Manage Database Schema
Understanding the DI Container, Registering Services in the DI Container, Injecting Services into Controllers
Configuring the AppSettings File for Production, Publishing the Application (IIS, Azure, or Docker), Managing Environment-Specific Configurations



Configuring the AppSettings File for Production, Publishing the Application (IIS, Azure, or Docker), Managing Environment-Specific Configurations
Overview of Web APIs, REST vs. SOAP, Setting up .NET 8 Development Environment, ASP.NET Core Web API project structure
Creating controllers, actions, and routes, CRUD operations with Entity Framework Core, JSON formatting and serialization
Attribute routing and query parameters, Middleware and custom filters, Implementing JWT-based authentication and authorization
Introduction to SOAP APIs and WCF, Consuming SOAP services in ASP.NET Core, Creating SOAP services using WCF
Global exception handling and error responses, Logging with Serilog, Securing APIs with API keys and Oauth
Integrating Swagger/OpenAPI for API documentation, Using Postman for manual API testing, Automating API testing with REST Client
"Definition and characteristics of microservices, Monolithic vs Microservices architecture, Benefits: scalability, modularity, fault isolation, independent deployment, Key principles:
Decoupling of services, API-based communication, Data decentralization, Domain-driven design basics"
"Setting up ASP.NET Core for microservices, Creating modular services (e.g., Product, Order, User), Service boundaries and responsibilities, Dependency injection and configuration management, Using Entity Framework Core in microservices, 
Implementing RESTful APIs with ASP.NET Core Web API"
"REST API Communication
HTTP clients in ASP.NET Core (HttpClientFactory), API Gateway basics (e.g., Ocelot), Service discovery (intro to Consul or Eureka)
Message-Based Communication
Introduction to asynchronous messaging, Event-driven architecture, Using RabbitMQ with ASP.NET Core, Using Azure Service Bus for cloud-native messaging, Publishing and subscribing to events"
Containerization with Docker, Independent deployment of services, Basic orchestration concepts (Kubernetes overview), Scaling services individually, Health checks and resilience patterns (e.g., retry, circuit breaker)
What is Debugging and Why is it important?, Why do we need Debugging?, Steps involved in Debugging, Debugging Strategies, Debugging Tools, Debugger vs. debugging, Debug mode vs. running your app, When to use a debugger
Set a breakpoint and start the debugger, Navigate code in the debugger using step commands, Step over code to skip functions, Run to a point in your code quickly using the mouse, Advance the debugger out of the current function, Run to cursor, Edit your code and continue debugging, Inspect variables with data tips, Inspect variables with the Autos and Locals windows, Set a watch, Examine the call stack, Inspect an exception, Configure debugging
Enter break mode, Code stepping-Step into code, Step through code and skip some functions,  Run to a specific location or function - Run to a breakpoint in code, Run to a function breakpoint, Run to Click, Move the pointer to change the execution flow
What is Automated Testing, Benifits of Automated Testing, Types of Tests, Test Pyramid, Popular Testing Frameworks, Using NUnit in Visual Studio, What is Test-Driven Development
Characteristics of Good Unit Tests, What to Test and What Not to Test, Naming and Organizing Tests, Black-box Testing, Set Up and Tear Down, Parameterized Tests, Ignoring Tests, Writing Trustworthy Tests
Testing Strings, Testing Arrays and Collections, Testing Return Type of Methods, Testing Void Methods, Testing Methods that Throw Exceptions, Testing Private Methods, Code Coverage
Loosely-coupled and Testable Code, Refactoring Towards a Loosely-coupled Design, Dependency Injection via Method Parameters, Dependency Injection via Properties, Dependency Injection via Constructor, Dependency Injection Frameworks, Mocking Frameworks, Creating Mock Objects Using Moq, State-based vs. Interaction Testing, Testing the Interaction Between Two Objects
