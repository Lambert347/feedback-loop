# Project Name: Feedback Loop


## Description

This is an app that allows the user to submit feedback that is then stored permanently in a database. 

The first step I took was to setup the index file. This included creating the store and the reducer to act as short-term storage for data from the client. I then moved on to setting up the App.jsx file. This included adding imports for the feeling, understanding, support, and comments components. The home and success ones were added later but I wanted to get the basic ones imported. Even though those components did not exist yet, I wanted to make sure that I didn't forget that crucial process and also so that I already knew what each component was going to be called to reduce errors later. I also made sure to set up the router paths for each component although these were altered later as more components were added. 

I ran into the first problem almost immediately as I needed to figure out how data was going to be stored short term after each step in the process. Rather than run back and forth to the database each time, I decided that it would be easier to store the information short term in a reducer in the index file depending on the action.type. Each component had its own action.type and then the reducer would sort out which value went with which key in the overall object. Each process would add a new piece of data to the stack and then the final submission screen would take in all that data, bundle it together, and then send it to the database for permanent storage. 

That theoretical understanding for how the logic flow would work made the construction of each component remarkably easy. They were effectively copies of each other with the data and the action.type being different. At this point, as I worked on each component, I did not include any input verification as I wanted to ensure that the basis for my idea worked before getting bogged down in the details of each component. Each component also shuffled the user along to the next in the process when the user clicked the next button, which both moved the data to that short-term storage and moved the user to the next page in a single click. The last component in the process at this point was a review page where the final submission was made to the server as a single object for long-term storage. At this point, I created a function to take in all the information in the store and put it into a new object, then display the parts of that object to the DOM. After some bug fixing, the process up to this point worked exceptionally well as the information was clearly displayed to the DOM. I filled out the review component and added the axios post request to move that information to the server. I then went to the server file and added the post route there as well. I then tested to make sure that data was going through properly. 

To indicate to the user that the process was successful, I included code to move the user to the newly created success page of the app that confirmed that the data was moved successfully and prompting the user to return to the home page by clicking the button if they wanted to may another submission. This new homepage that I created to replace the feeling component as the first in the process simply prompts the user to click the start button to start their submission. With these two components added, the user can basically submit as many times as they want without having to refresh or restart since the app loops back in on itself. 

The next step was to clean up any leftover console.logs in the code and add input verification. For verification, I added a min and max value to the input so that the user can only input values from 0 to 10. However, the user is prompted that 0 is not valid and that only 1 to 10 is valid for feedback. The function uses return to break which prevents the user from moving on to the next step unless a valid number is entered. For the comments component, I did not include verification so that the user may not add any comment if they choose not to. The overall process of creating this app was fairly straightforward. 

## Usage 
This app is fairly straightforward to use. The user is prompted at each step to enter a value and click a button to move on to the next step. If an invalid entry is made, the user is notified and prevented from moving on and is also notified as to what entries are considered valid. The review screen lets users review their submission in a clean format and then they are allowed to go back to the homepage and make another submission after the first one is successful. 

## Built With Javascript, React, MaterialUi, Node, Redux, and HTML 

## Thanks to Prime Digital Academy for the instruction and knowledge to create this application 

## Support 
Email lambe347@umn.edu for any suggestions or problems. 
