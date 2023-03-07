import { before, binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';

@binding()
export class ebooklogin {
  

  @given(/Given user navigates to the website ebook.com /)
	public websiteLogin(username: string, password: string): void {
		
		// The step definition
				
	}

	@when(/User Navigate to Login Page/)
	public navigateLoginPage(): void {
		...
		// The step definition
		...
		}
	
	
	@and(/user logs in through Login Window by using "([^"]*)" with "([^"]*)"/)
	public loginValidation(user: string, pass: string): void {
		...
		// The step definition
		...
		}
		
	
	@then(/login must be successful/)
	public displaySuccess(author: string): void {
		...
		// The step definition
		...
		}
		
}
