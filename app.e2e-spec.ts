import { browser, element, by } from 'protractor';

describe('City_Guide E2E Tests', function () {

  let expectedMsg = 'Hello Angular';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
describe("test for input", function()){
	it("to test input field and check the output", function()){
		element(by.model("city.name")).sendKeys()
	}
}