# basic-api-server

Problem Domain: Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a database, using the REST standard

# Notes

### CRUD Operations with REST and Express

- CREATE
  - `app.post('/resource')`
- READ All / LIST
  - `app.get('/resource')`
- READ One
  - `app.get('/resource/:id')`
- UPDATE
  - `app.put('/resource/:id')`
- DESTROY
  - `app.delete('/resource/:id')`

### Route Modules

- Normal node modules
- Require express just like your server
- Instantiate `express.router` instead of `express()`
- Export the route definitions
- The main server/app should require your route an then `use()` them
  - The server can prefix imported routes

## Deployed Links

Need to deploy dev link at least - reaching limit on Heroku apps.