# ***Project README Example***

---------------------------------
---------------------------------

# Project JOHN

---------------------------------

## We are deployed on _____

[project url here]

---------------------------------

## Web Application

***[Explain your app, should be at least a paragraph. What does it do? Why should I use? Sell your product!]***

The web application consists of a frontend written in Razor views, HTML, CSS,
Bootstrap, Popper, and jQuery. The backend was written in C# using ASP.NET Core 2, Entity Framework Core, and the MVC framework.

An interface is provided to create new blog
posts, view existing blog posts, edit existing blog posts, delete existing
blog posts, and search by both keywords and user names. All blog posts can be
enriched using Azure Language Services (part of Microsoft's Cognitive Services
suite), Bing Image API, and Parallel Dots (for automated tagging of posts via
key phrases detected within the post's body). Image enrichments can be added
based on the overall sentiment score (a range 0.0 - 1.0 related to the mood
of the post) and key phrases / keywords detected in the posts. Optionally, users
can choose to opt-out of these features for privacy or data collection concerns.

---------------------------------

## Tools Used

Microsoft Visual Studio

- Node.js
- Express

---------------------------------

## Getting Started

Clone this repository to your local machine.

```
git clone https://github.com/YourRepo/YourProject.git
```

Once downloaded, you can either use the dotnet CLI utilities or Visual Studio 2017 (or greater) to build the web application.

```
cd YourRepo/YourProject
`npm i`
```

Install all dependencies needed for the project.

```
Database
```

* explain how to use the database *

```
cd YourRepo/YourProject
npm start
```

---------------------------------

## Usage

***[Provide some images of your app that shows how it can be used with brief description as title]***

### Overview of Recent Posts

![Overview of Recent Posts](https://via.placeholder.com/500x250)

### Creating a Post

![Post Creation](https://via.placeholder.com/500x250)

### Enriching a Post

![Enriching Post](https://via.placeholder.com/500x250)

### Viewing Post Details

![Details of Post](https://via.placeholder.com/500x250)

---------------------------

## Data Flow (Frontend, Backend, REST API)

***[Add a clean and clear explanation of what the data flow is. Walk me through it.]***
![Data Flow Diagram](/assets/img/Flowchart.png)

---------------------------

## Data Model

### Overall Project Schema

***[Add a description of your DB schema. Explain the relationships to me.]***
![Database Schema](/assets/img/ERD.png)

---------------------------

## Authors

Albus Dumbbledore
Igor Karkaroff
Minerva McGonagall
Leta Lestrange
Gellert Grindelwald

------------------------------
