import { before, binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import { Builder, WebDriver } from 'selenium-webdriver';
import { setDefaultTimeout } from 'cucumber';

let driver: WebDriver

@binding()
export class ebooklogin {
  

  @given(/login to the website/)
	public websiteLogin(searchValue: string): void {
    ...
    // The default step definition
    ...
	}

  @when(/User Navigate to Login Page
	And user logs in through Login Window by using <Username> with <Password>
	Then login must be successful.
}
