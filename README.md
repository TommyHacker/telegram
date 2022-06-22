# Telegraph clone

<hr/>

# Overview

##### This app uses an express api to create and read Telegraphs that interacts with an HTML front end.

<hr/>

# Technologies used

- html, css, vanilla/javascript
- node.js 
- jest
- express.js
- SQL / POSTGRES
- docker
- github
- slack

<hr/>

# Getting started
<i>how to run*</i>

* it is recommended you have docker desktop installed on your machine.

1) clone the Repo
0) navigate into the project directory your terminal.
0) run command: 
    - for windows :<code>bash _script/startDev.sh</code>
    - for linux :  <code>sudo bash _script/startDev.sh</code>

0) navigate to <strong>http://localhost:3000</strong> to view the api responses within your browser

- <strong><i>terminate the docker containers by replacing startDev.sh with teardown.sh in step 3</i></strong>


#API Endpoints

http://localhost:3000

### get
    - http://localhost:3000/telegraphs 
        searches database and returns ALL telegraphs

    - http://localhost:3000/telegraphs/1 
        searches database for telegraph with the id of 1
### post
    - http://localhost:3000/telegraphs
        creates a new telegraph and stores it in the database. returns the new telegraph.
    
### post body JSON example:              
                {
                "title": "exampletitle",
                "psuedonym":"fakename",
                "body":"example body of text"
                }

# SQL postgres schema

                id: 1
                title: string max length () cannot be null
                pseudonym: string max length () cannot be null
                body: string max length () cannot be null