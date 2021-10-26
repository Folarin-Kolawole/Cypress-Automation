/// <reference types="cypress" />


describe('Automating aliexpress', function() {


it('function', function() {


cy.visit('https://www.aliexpress.com/')


cy.get('.btn-close').click()


cy.get('.close-btn').click()


cy.get('.cl-item-sports > .cate-name > span > a').should('be.visible')


cy.get('.search-key-box').type('ps5')


cy.get('.search-button').click()


cy.wait(7000)


cy.get(':nth-child(1) > ._9tla3 > .A3Q1M').click()



});


});