/// <reference types="cypress" />

describe('facebook login', function() {

it('login', function() {


cy.visit('https://web.facebook.com/')

cy.wait(6000)

cy.get('[data-testid=royal_email]').type('08088247498')

cy.get('[data-testid=royal_pass]').type('doctorlove')

cy.get('[data-testid=royal_login_button]').click()





});


});