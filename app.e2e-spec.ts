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


describe("test for input field on home page", function(){
	it("should be on a correct page",function(){
		browser.get("http://city-guide.com/jswebapp");
		expect(browser.getCurrentUrl()).toEqual("http://city-guide.com/jswebapp");
	});

	it("testing input and output",function(){
		browser.get("http://city-guide.com/jswebapp");
		element(by.model("city.name")).sendKeys("Sarajevo");
		element(by.buttonText("DETALJI")).click();
	});
});
