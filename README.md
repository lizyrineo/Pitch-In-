# Pitch-In!

## Overview
 Pitch-In!
Using Ruby, Rails and React I will create an app where users can find volunteer opportunities.  I will have five tables, one for the user's information, one for each of the organization types and one for each of the organizations opportunities.  The user will register so that they have a login and password in order to access the opportunities.


<br>

## MVP

_The **Pitch-In!** MVP Goals:
1 table for users
2 tables for organization types
2 tables for organization opportunities
Register and login
Create opporutnities
Read opportunities
Edit opportunities
Delete opportunities
<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front end                                _ |
|   React Router   | Front end                                _ |
|       Axios      | API Calls                                _ |
|       Rails      | Database                                 _ |


<br>

### Client (Front End)

#### Wireframes


https://app.diagrams.net/?libs=general;mockups#G1Uh7kUWs4ISnaVYorYo-Ct8syvZLunwwg

- Desktop Landing

https://app.diagrams.net/#G1VurjkzfrQ8bwjaDESvG32OFKP2X_zBOy

- Register Page

https://app.diagrams.net/#G1vtc6Efmp0YuMHIlHIang3ZiCVEXUw6Ot

- Log In Page

https://app.diagrams.net/#G1Wz-FB5cQk09I7m0Bt_nvYlnPV3SvRlcM

- Community Page

https://app.diagrams.net/#G1LsroDgddom0NnNJzXyaCnXM4QoqyvJHf

- Animal Page

https://app.diagrams.net/#G1MkScRZxJ7uiXahzJdonm4UnrlxHUiVqu

- Org Detail

https://app.diagrams.net/#G1kSD1UGWrTZIgGKiKnr4zfprwoMo6aRvA

-Edit/Delete page

https://app.diagrams.net/#G19ewTChZBrkGZin6p1284UUKHpkwmLZcB

-Add page


#### Component Tree

https://whimsical.com/pitch-in-AfeBJLMAZtWD929ytsod92

#### Component Hierarchy

``hierarchy
back-end

|__ controllers/
      |__ app controller
      |__ auth controller
      |__ org controller
      |__ opportunity controler
      |__ user controller
|__ models/
      |__ user
      |__ org
      |__ opportunity
      |__ mockups      


front-end      

|__ Main Container/

|__ Screens/     
      |__ landing
      |__ login
      |__ register
      |__ org list
      |__ org detail w opportunities
      |__ org edit/delete
            
|__ services/
      |__ api config
      |__ auth
      |__ orgs
      |__ opportunities
``
#### Time Estimates

``

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Tables       |    H     |     3 hrs      |               |             |
| Create Seed         |    H     |     4 hrs      |               |             |
| Setup Folders       |    H     |     2 hrs      |               |             |
| Set up Layout       |    H     |     3 hrs      |               |             |
| Set up Services     |    H     |     6 hrs      |               |             |
| Create Screens      |    H     |     6 hrs      |               |             |
| Create Components   |    H     |     3 hrs      |               |             |
| Create CRUD Actions |    H     |     6 hrs      |               |             |
| Set up Add Form     |    H     |     2 hrs      |               |             |
| Styling             |    H     |     8 hrs      |               |             |
| TOTAL               |          |     43 hrs     |               |             |
``
<br>


### Server (Back End)

#### ERD Model

https://app.diagrams.net/#G1OSod-tsRMZUKNROPqYPJNiKjMx84pfAI

<br>

***

## Post-MVP

I would like to add a scheduling component where the user can select a date for volunteering

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
