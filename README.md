js-winter-week-3
================

PCS JS Winter 2014: Week 3. It's time for Objects!
Don't forget the git workflow. If you need help, see the bottom of this document. 

#Wednesday

##Basic assignment
- Copy appointment.js into your working directory. You're going to create an appointment constructor function
- There's a basic appointment object defined in appointment.js to show you what properties an appointment should have. You don't need to keep the object itself.
    + Make a constructor function called Appointment that can be called with the `new` operator.
    + Add the following bit of code to the constructor so that it will still work if someone forgets to the `new` operator

```javascript
if(!(this instanceof Appointment))
        return new Appointment();
```

## Intermediate Assignment
- Make an `AppointmentBook` class to keep your appointments. It should be able to do the following:
    + add a new appointment
    + cancel an appointment
    + reschedule an existing appointment for a new time
    + list all existing appointments

## Advanced Assignment
- Dig into the functionality of Javascript's Date object. Add the following abilities to your AppointmentBook:
    + return a list of all appointments for a given date
    + return a list of all appointments for a range of dates
    + return a list of all appointments for a given month

These functions should return an array of Appointment objects.

#Monday

##Basic assignment

- Copy cash-register.js into your working directory and implement the object. - You're going to create a cash register object. 
- The cash register object needs to have method to do the following: 
    + add to the total
    + subtract from the total
    + to return the current total. NOTE: **You *must* to keep track of the total within the object, not in a variable outside of the object**

##Intermediate assignment

- Copy shopping-cart.js into your working directory. 
- Create a shopping cart such as would be used in an online store. 
- These are its requirements:
    1. It must have an add function that accepts an object containing description, price and item count keys, and returns a uniquely assigned item id.
    2. It must have a remove function that accepts a unique item id, and a number that represents how many to remove. The function should change the item count or delete the item altogether as appropriate.
    3. It must have a list function that returns an array of desciptions, prefixed by "n X ", where n is the number currently in the cart.
    4. It must have a total function that returns the current total cost of the purchase. 


## Git Worflow From Start to Finish
1. Make sure you are in the directory where you want your homework project directory to be stored
2. `git clone 'urlGoesHere'`
3. cd to the project directory
4. `git checkout -b branchWithYourNameOnIt`
5. `mkdir dirWithYourNameOnIt`
6. `touch assignmentName.js` to create the file with your homework in it.
7. Do the exercises below (don't forget to save)
8. `git add assignmentName.js` to add changes
9. `git commit -m "commit message here"`. 
10. `git pull` to update your local repo to match up with the remote repo. 
11. `git push` (make sure you are still on the branch with your name on it before you push.)
12. Submit a pull request on github
13. Look at feedback
14. Make changes
15. Git add, then commit, then push (There is no need to get rid of the previous pull request and make a new one. Just push your new changes. The pull request will automatically update). Make sure you are on the branch with your name on it when you push. 