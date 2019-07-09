Feature: Verify Way2Automation.com Home Page components
   Locate elements and verify the presence of UI elements

Background: Navigate to Homepage
Given I navigate to WayAutomation homepage

@homepageTest
Scenario: Verify Search box is displayed
Then I could find Search box is displayed

@homepageTest
Scenario: Verify Add User link is displayed and working
Then Add User link is displayed on Page
When I clicked on Add User link
Then Add user page should pop up