/// <reference types="cypress" />

//Describe the project
describe("Quales Automation class", function() {

//Write a test script to login to an application
it("Login", function() {

//visit the application to automate 
cy.visit("https://app-dev.warenext.ng/")

//wait for 10 seconds
cy.wait(10000)

//Before inputting or clicking on a web element(input field, login button) you need cypress to spy on these elements

//spy on the email input field
cy.get('[name="username"]')

//type into the email field
.type("merchant@test.com")

//spy on the password input field
cy.get('[style="position: relative; width: 100%;"] > .input')

//type into my password into the password field
.type("test1234")

//spy on the login button
cy.get('.sc-cpmLhU')

//click the login button
.click()

//Assertions

//Spy the Activities element
cy.contains('Activities')

//check that Activities element is visible
.should('be.visible')

cy.get('[href="/createRequest"] > .sc-bdVaJa').should('be.visible')


});


});
