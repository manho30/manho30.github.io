## MyCovid Data API

> **Note**
> MyCovid Data API will be fully suspended in September 2022. Please Use [v2](https://mycovidapi2.herokuapp.com) instead

The MyCovid API is an HTTP-based interface 
created for developers keen on building about
Malaysia Covid-19 programs.

Once deverloper sent a request, 
the Web API will send back a json
formated data. 



## Usage

### Base Url 
Providing 2 interfaces, non-interfering with each other. 
Operate independently

- `manho30.herokuapp.com/`


- `mycovidapi.herokuapp.com/`

All the [Supported Queries](#method) can be normal using 
while making request to both of MyCovid Data API. 

### Making requests
All queries to the MyCovid API must be served over 
HTTPS and need to be presented in specific form. 

You can either choose to fetch like 

```
mycovidapi.herokuapp.com/api/<method>
```

OR 

```
mycovidapi.herokuapp.com/<method>.php
```

Supported `GET` HTTP methods by passing parameters in MyCovid API requests:
 - URL query string 

## Method
Providing data from Malaysia MoH 
- [Daily Confirmed Cases](#cases)
- [Vaccination By State](#state)
- [Vaccination Data](#vax)
- [Death](#death)
- [Clusters](#clusters)
- [School Vaccination](#school)
- [ICU](#icu)
- [PKRC](#pkrc)
- [Population in Malaysia and every state](#population)
### Cases

Get the confirmed Covid-19 case(s) 

*Example Code*

``` javascript
fetch("http://mycovidapi.herokuapp.com/cases.php?date=now)
    .then(response => response.json())
    .then(res => console.log(res))
```
**Parameter**

- date (Require) 

##### Parameter and query for cases data 

- date:

| Query       |  Query String     | Description              |
| ----------- | ----------------- | ------------------------ |
| all         | date=all          | Get all possible data    |
| now         | date=now          | Get today's data         |
| yyyy/mm/dd  | date=2022-01-31   | Get a specific date data |





### State

Get Covid-19 confirmed case(s) 
information in every state 

**Example Code**

``` javascript
fetch("http://mycovidapi.herokuapp.com/state.php?date=now&state=Johor)
    .then(response => response.json())
    .then(res => console.log(res))
```
**Parameter**
- date(require)
- state(optional)

##### Parameter and query for state data

- date:

| Query       |  Query String     | Description              |
| ----------- | ----------------- | ------------------------ |
| all         | date=all          | Get all possible data    |
| now         | date=now          | Get today's data         |
| yyyy/mm/dd  | date=2022-01-31   | Get a specific date data |

- state:

| Query       |  Query String     | Description              |
| ----------- | ----------------- | ------------------------ |
| state       | state=<state_name>| Get all possible data    |

**Notice:** The first letter needs to be capitalized for the `state` query


### Vax
Get the Covid-19 vaccination data 
``` javascript
fetch("http://mycovidapi.herokuapp.com/state.php?date=now)
    .then(response => response.json())
    .then(res => console.log(res))
```
**Parameter**
- date(require) 

##### Parameter and query for vax

- date:

| Query       |  Query String     | Description              |
| ----------- | ----------------- | ------------------------ |
| all         | date=all          | Get all possible data    |
| now         | date=now          | Get today's data         |
| yyyy/mm/dd  | date=2022-01-31   | Get a specific date data |


### Death
RIP... Get death data due to Covid-19

``` javascript
fetch("http://mycovidapi.herokuapp.com/death.php?date=now)
    .then(response => response.json())
    .then(res => console.log(res))
```
**Parameter**
- date(require)

##### Parameter and query for death data

- date:

| Query       |  Query String     | Description              |
| ----------- | ----------------- | ------------------------ |
| all         | date=all          | Get all possible data    |
| now         | date=now          | Get today's data         |
| yyyy/mm/dd  | date=2022-01-31   | Get a specific date data |





## Data source
All the data are from [MoH-Malaysia/covid19-public](https://github.com/MoH-Malaysia/covid19-public)

## Build your own
 the tutorial below is not actually this interface'S source,
 its a new one stop API I builded recently. 
 
 Don't ask me why i ddin't open souce this interface, bcuz of 
 the script i wirit is very trash!!!!!!!!!!!1
 
 So, here we go:
 
 [Here is the GitHub Repo.](https://github.com/manho30/covidapi)
 
 
 ## covidapi

The PHP script for tracking the COVID-19 epidemic and vaccination data in Malaysia

Coverage percentage: ![coverage](https://img.shields.io/badge/coverage-42%25-green)
## Usage


### Requirment
- PHP environment installed
- PHP verison 7.4 and above


### Clone the project

```bash
$ git clone https://github.com/manho30/covidapi.git
$ cd /covidapi
```

### Run the server

``` bash
$ php -S 127.0.0.1:8084
```
The server should be statr now.

### Deploy to heroku

You may deploy this project to heroku
so that everyone can use be using.

Heroku providing the free backend and sub domain 
to public

To deploy this project to Heroku, you must

- fork this project
- A Heroku account

---
1. Sign in to Heroku
2. Create a new APP
3. From `deploment method`, select `GitHub`
![img](/assest/heroku-github-method.png)
4. Type this project name, and select connect
![img](/assest/gtihub-connect.png)

**Your development should be done now**

## Credit
Open data: Ministry of Health Malaysia and CITF Malaysia

