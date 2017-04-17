var LightPage = function() {
  this.go = function() {
    return browser.get("http://127.0.0.1:8080/#/light");
  }

  this.turnOff = function() {
    element(by.partialButtonText("Turn off")).click()

    expect(
      element(by.css("#lightStatus")).getText()
      ).toContain("The computer is off");
  }

  this.turnOn = function() {
    element(by.partialButtonText("Turn on")).click()

    expect(
      element(by.css("#lightStatus")).getText()
      ).toContain("The computer is on");
  }
}

describe('HomeSpec', function() {
  beforeEach(function() {
  })

  it("should open the homepage", function(){
    browser.get('http://127.0.0.1:8080/#/') 

    expect(
      element(by.css('h1')).getText()
      ).toContain("AngularJS")

    ///

    var lightPage = new LightPage();
    lightPage.go()
    lightPage.turnOff();
    lightPage.turnOn();

  })
})
