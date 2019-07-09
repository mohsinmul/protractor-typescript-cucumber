Feature: Add User Functionality

Background: Navigate to Homepage
Given I navigate to WayAutomation homepage

@addUserTest
Scenario: Verify User can bee added
When  I clicked on Add User link
And Entered first name as "Mohsin"
And Entered last name as "Mulla"
And Entered username as "MohsinMulla"
And Entered password as "Mohsinmulla"
And Selected 1 radio button as customer
And Selected "Customer" as a role from dropdown