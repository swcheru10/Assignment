Feature: Book details

@regression @smoke
Scenario: Display Book details
	Given User login to the website as <Username> with <Password> is successful
	When User click the first book with <Authorname> as the author
	Then Display book details for <Authorname>.

Scenario Outline: Get book details
	Username | Password | Authorname
	username1 | password1 | author1
	username2 | password2 | author2
	username3 | password3 | author3
	username4 | password4 | author4