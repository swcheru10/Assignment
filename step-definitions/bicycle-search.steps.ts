import { binding, given, then, when,and} from 'cucumber-tsflow';
import { assert } from 'chai';

@binding()
export class BikeSalesSteps {
  private userName: string = '';
  private bicycle_color: string = '';
  private bicycle_price: number = 0;
  private bicycle_availability:boolean=false;
  private bicycle_display_data:array;
  
    
  @Given('I log into the website as',async function (string:userName) {
   this.driver = new Builder()
            .forBrowser('chrome')
            .build();
   await this.driver.get('http://localhost:4200');
  });  

  @When('I search for bicycles based on color with', async function (string:bicycle_color) {
      var bicycle_list = await this.driver.findElements(By.className('bicycle-list'));
                    var expectations = bicycle_list.hashes();
                    for (let i = 0; i < expectations.length; i++) {
                    const bicycle = expectations[i];
                    if(bicycle.color == this.bicycle_color){
                    bicycle_display_data = bicycle
                      }
                    }
      
  });
  @When('I search for bicycles based on price with', async function (number:bicycle_price) {
        var bicycle_list = await this.driver.findElements(By.className('bicycle-list'));
              var expectations = bicycle_list.hashes();
              for (let i = 0; i < expectations.length; i++) {
              const bicycle = expectations[i];
              if(bicycle.price == this.bicycle_price){
              bicycle_display_data = bicycle
                }
              }
        
    });
  
  @Then('check availability with ', async function (boolean:bicycle_availability) {
      for (let i = 0; i < bicycle_display_data.length; i++) {
          const bicycle = await bicycle_display_data[i].findElement(By.tagName('h3')).getText();
          assert.equal(bicycle_availability, bicycle.availability);
          const description = await bicycle_display_data[i].findElement(By.tagName('p')).getText();
          assert.equal(description, `Description: ${bicycle_display_data[i].description}`);
      }
  });
  
  @And('Display Available bicycles',async function (dataTable) {
  
    });
