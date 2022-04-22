## Task: 

#### Schema :- 
* College : Id, Name, Year founded, City, State, Country, No of students, Courses  (Computer science, Electronics, IT..etc)
* Student : Id, Name, Year of batch, College_Id, Skills (C++, Java, C,...etc)

Based on the above schema, Create some mock fake data with 100 colleges  and 100 students in each college.  For example : College1, College2, Student1, Student2..etc Feel free to add more fields.

### Use Mongo Database
### Web service (Node.js)
* Get College details by College name/id
* Get similar colleges for a given college : You could use based on location, no of students and courses offered.  You could pull similar colleges.

For ex :- A college1 offers Computer science in Karnataka. The similar colleges for this would be other colleges in the same locality but offers similar courses and also with +/- 100 students range. Make sure you have mock data accordingly. 

If there is none found, How would you handle it?

### Responsive UI (React)
* Show list of colleges
* Show dashboards / Charts by State.
For ex :- 30% of colleges in AP, 20% of colleges in UP..etc
* Show dashboards / Charts by Courses
For ex:- 40% of colleges offers Computer Science, 20% offers IT..etc
* Should be able to drill down a particular sector and see the list.
For ex:- I click on 30% colleges in AP, it should show all the colleges in a list view.
* Say I drill down to a particular college, College 1. You should show the following info.
* It should show college details
* Show list of students in that college
* Show a list of similar colleges 
* Say I drill down to a particular student. 
* Show Student details.

### Assessment Criteria:-
* Focus heavily on UI look and beautiful and it should be responsive UI 
* Using Functional React Components with hooks would be bonus point
* You can use Ant Design components for good set of UI components
* Code readability and maintenance would be given high priority.  
* Sample Screenshots below.
