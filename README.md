# HouseKeeping in order_Finals 2020 VIT (Udaan)

## House Keeping System

### Description

Product designed according to the problem statement given on hackerearth test.


In every big Organization like School, Offices, Apartment complexes, hotels e.t.c. there are number of assets that needs constant monitoring and upkeeping. Usually you would have observed that there is a specific team called house keeping that have to ensure that all assets and facilites is kept in working and usable conditions.

The main aim of this product is to ease the process of managing and executing the duties and various different tasks of and within the environment.

### Dependencies to be installed

```
npm i
```

### Starting the Server

```
node ./bin/www
```

NOTE: In case of local execution - mongoDB client is required.

## API hosted at Heroku : [Click Here](https://udaan2019-indresh.herokuapp.com/)

API Documentation :

```
route : /add-asset
request type : POST
Body : {name : <asset_name> }
failure response : {{message : error}}
success response : {{message : success}}
```

```
route : /assets/all
request type : GET
failure response : {{message : error}}
success response : JSON of assets
```

```
route : /add-task
request type : POST
Body : {name : <task_name> ,asset : <asset_id> }
failure response : {{message : error}}
success response : {{message : success}}
```

```
route : /add-worker
request type : POST
Body : {name : <worker_name> }
failure response : {{message : error}}
success response : {{message : success}}
```

```
route : /tasks/all
request type : GET
failure response : {{message : error}}
success response : JSON of tasks
```

```
route : /workers/all
request type : GET
failure response : {{message : error}}
success response : JSON of workers
```

```
route : /get-tasks-for-worker/:id
request type : GET
failure response : {{message : error}}
success response : JSON of worker's tasks (Here id is a variable that is the object id of the worker)
```

```
route : /allocate-task
request type : POST
Body : {workerId : <worker_id>,timeOfAllocation : <timeOfAllocation>,taskId : <taskId> }
failure response : {{message : error}}
success response : {{message : success}}
```

### API built using Node.js , express and backend used is mongoDB.
