# APIs

## Assignment

- GET

/assignment/:id

- POST

/assignment

Body:
{
  name: "",
  title: "",
  content: "",
  criteria: "",
  belongTo: ""
}

- PUT

/assignment/:id

Body:
{
  name: "",
  title: "",
  content: "",
  criteria: "",
  belongTo: ""
}

- DELETE

/assignment/:id


task

GET /task/:id
POST /task
PUT /task/:id
DELETE /task/:id

bulk api

GET /bulk/task/:ids
POST /bulk/task
  request body []
PUT /bulk/task
  request body [
    {
      id: 'xxx',
      ...
    }
  ]
DELETE /bulk/task/:ids