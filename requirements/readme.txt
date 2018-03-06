BUS REPORT APP ANGULAR TEST


Using Angular, create a bus report page that looks like the screenshot attached in bus-report-example.PNG.

Requirements:
- On a single page, make all the data from "bus-services-data.json" available to the user.
- Data can be displayed in a list or a table, or a combination of both.
- Only the names of the organisation should be shown initially. When the user clicks on the name of the organisation, this should toggle the report showing the data for that organisation.
- The first three numbers of the route variant are most important, so they should be formatted as "bold".
- Display the following bus statuses based on its deviation from timetable - "On Time", "Late", "Early", or "Unknown".
- Use colors of your choice to signify the status of the buses (e.g. green text might mean that the bus was on-time)
- You may make any reasonable assumptions in your solution, but ensure that you note these assumptions down in assumptions.txt.


Notes:
- The requirements may be ambiguous, make sure you document any assumptions used.
- Commit your work to your local git repository. Create a Github repository and push. Our team uses TDD approach and regular commits would be favourable.
- You may use NPM, Yarn or any other framework if required.  Make sure you document the steps and app versions that we might need to run your project. Please exclude (.gitignore) any generated folder or dependency that would bulk up the repository. 
- The solution needs to work on Google Chrome.


Bonus Points (Optional):
- You will score bonus points for creativity and/or making the application look nice.
- Provide a facility to leave notes about each organisation. There is no provided endpoint for the notes form submission. The data do not need to be saved to a server/database.