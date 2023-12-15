# TodoTracker

A web application which help you to create, update, delete and track your Todo on daily basis.
It is user specific app, which mean a user can track their Todo, and mark it as done , or not done.
The project is built using a tech stack consisting of Node.js for the server-side scripting.
Express for handling HTTP requests and routing.
MongoDB for storing and managing the data and EJS for rendering the views and templates.

## Installation

To run this application on your local machine, please follow these steps:

Clone this repository using the following command:

```
$ git clone https://github.com/shashidharbollu/todoer.git
```

Install the required dependencies using the following command:

```
$ npm install
```

Start the application using the following command:

```
$ npm start
```

Open the application in your web browser by visiting the following URL:

```
$ http://localhost:8000
```

## Usage

Once you have the application up and running, you can start using it by following these steps:

- Sing-up/Sign-in into your account.
- Click on the "Add Todo" button to create a new Todo.
- Enter the name of the habit you want to track.
- Click on the "Save" button to save the Todo.
- Click on the "heart" button to Add the Todo.
- To mark a Todo as complete/incomplete for the day, simply click on the corresponding icon.
- To delete a Todo, click on the "Delete" icon next to it.
- To Edit a Todo, click on the "Edit" icon next to it.
- To see today's Todos, click on "Edit/delete" button.
- To edit a Todo, click on the "Edit" icon next to it.

## Folder Structure

```
Todo Tracker
    |
    |               |--->css
    |--->assets---->|--->img
    |               |---> js
    |
    |               |--->flashMiddleware.js
    |--->config---->|--->mongoose.js
    |               |--->passport_local.js
    |
    |                  |-->Todo_controller.js
    |--->controllers-->|-->home_controller.js
    |                  |-->user_controller.js
    |
    |               |-->Todo.js
    |--->models---->|
    |               |-->user.js
    |
    |
    |               |-->Todo.js
    |--->routes---->|-->index.js
    |               |-->user.js
    |
    |
    |              |--->_header.ejs
    |              |--->404.ejs
    |              |--->daily_view.ejs
    |              |--->forget_password.ejs
    |--->views---->|--->home.ejs
    |              |--->layout.ejs
    |              |--->user_sign_in.ejs
    |              |--->user_sign_up.ejs
    |              |--->weekly_view.ejs
    |
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json

```



Contributions are always welcome! If you have any suggestions for improving this application, please feel free to create a pull request or open an issue.
