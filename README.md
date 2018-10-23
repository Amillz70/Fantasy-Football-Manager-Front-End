[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

##
## Link to Backend Repo
https://github.com/Amillz70/Fantasy-Football-Manager

## Link to Frontend Repo
https://github.com/Amillz70/Fantasy-Football-Manager-Front-End

## Link to Deployed Site
Frontend of site:
https://amillz70.github.io/Fantasy-Football-Manager-Front-End/

## Backend of site:
https://floating-plateau-43011.herokuapp.com


## User Stories

As a user, I want to sign up, sign in, sign out, and change my password.
As a user I want to add a name to my team.
As a user I want to delete a team.
As a user I want to update my team's name.
As a user I want to see what player is on what team.

## Adam's Fantasy Football Manager Description
For my second project for the second project for my Web Developers Immersive at General Assembly, I decided to make a Fantasy Football Manager. Our criteria for this project was that it had to be a full-stack application with a front-end and back-end, and we needed to create the back-end as well. I wanted to work with something that could be small to start, but could be expanded and scale out into something, theoretically, massive. I have been playing fantasy football the past few years with my father and decided that it was something that could expand into something with a lot of moving parts.

To start my project, I decided to make two tables, one for user and one for team. The user could have multiple teams, but each team could only have one user. My first step was to link my local back end repository to a Github repository. After that I decided to generate a scaffold to start to create my backend.I then went through the files created from the scaffold and made sure everything was in place. Once I was sure everything was in place, I created the relationship between user and teams that I mentioned above. Then I migrated the files to ensure that relationship was in place.

It was about here where I decided to switch over and start work on the front-end. I found a frontend template I had previously used for my last project, a Tic Tac Toe game, and used that as my starting point. I removed anything I did not need from that last project then linked the repository to my backend that I created on heroku. From there I added basic HTML as well as an app.js, events.js, ui.js, and api.js files. I then added similar Sign Up, Sign In, Sign Out, and Change Password functionality from the previous project. Once I was sure that those worked I decided to go back to the backend.

I changed my backend team controller to a Protected Controller because I don't want other users seeing what another using is doing. After making sure once again that the user/team relationship was set, I returned to my front end to work on the CRUD requests for team.

I started by making a get request for teams. I realized along the way I could not test this until I created a team or more. So I switched to working on my create team. It was at about this time that I decided to implement handlebars into my code as a way to more easily structure my requests. I created a team-listing.handlebars file and added what I needed to that file, app.js, event.js, and ui.js to make it work with my code. Once handlebars worked I was able to create and get teams. Next was clear and this gave me some trouble. I need to fix some of the events code around so that clear only worked when the button was clicked. The update was the hardest to implement, but after many failed attempts I was able to have a functional table that could create a team, get all teams, delete a team, and update a team. At this point I was uncertain if this hit minimum viable product and to be safe I created another request to get a single team based on it's ID number.

Compared to the first project we did, this one seemed to be more manageable for me. I had a better plan before I touched a line of code as well as taking my time to whiteboard before I began. I still had some trouble along the way, but I feel much more confident in my code this time around than last time even though this is a tougher project. I still have a long way to go before I consider this project "done", but this process seems to be getting better for me on my path to become a developer.

## Link to Backend Repo
https://github.com/Amillz70/Fantasy-Football-Manager

## Link to Frontend Repo
https://github.com/Amillz70/Fantasy-Football-Manager-Front-End

## Wireframe and ERD

https://imgur.com/I4NfARR  
https://imgur.com/XMarMpc

## Whiteboard

https://imgur.com/0DRGL6d

##Technology Used
-JavaScript -HTML -CSS -Ruby -Rails -JSON -JQuery -AJAX -DOM -Handlebars

##
Additional features in the future

In future versions I hope to add a player's table as well as a join table to allow users to add the players on their teams. After that feature, I hope to link up this project to a 3rd party API and allow the players to be updated from an outside source. Finally I would like to implement a rankings system to help the user pick which player to start, bench, trade, draft, ect.

## Additional Resources



## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
