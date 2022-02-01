### REST APIs

1. Operations as HTTP methods

CRUD => Create Read Update Delete
POST GET PATCH/PUT DELETE

GET POST PUT DELETE PATCH

2. Respond with appropiate status codes

   200... Success.
   300... Redirects
   400... User errors
   500... Server errors

400 - bad request
401 - Unauthorized
403 - Forbidden
404 - Not found
200 - Ok
201 - Created
500 - Internal Server Error
300...

3. Clean urls:

GET - '/users'
GET - '/users/:id'
POST - '/users'
PATCH - '/users/:id'
5

GET - '/allUsers'
GET - '/userById/:id'
POST - '/createUser'
PATCH - '/userUpdate/:id'
5
