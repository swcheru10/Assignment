Feature: Login

@regression @smoke
Scenario: Successful Login with Valid entries
	Given user navigates to the website ebook.com 
	When User Navigate to Login Page
	And user logs in through Login Window by using <Username> with <Password>
	Then login must be successful.

Scenario Outline: Login functionality
	Username | Password
	username1 | password1
	username2 | password2
	username3 | password3
	username4 | password4