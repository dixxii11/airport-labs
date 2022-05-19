const { should } = require("chai")

describe('Verify airportlabs', () => {


    it('Ex1', () => {
        cy.visit('https://airportlabs.com/')
        cy.get('.banner > h1').should('have.text', 'Making aviation more efficient')
        cy.get('.banner > h1').should('have.css', 'font-size', '42px')
        cy.get('.banner > h1').should('have.css', 'text-transform', 'uppercase')
    })

    it('Ex2', () => {
        cy.visit('https://airportlabs.com/')
        cy.get('.stats__num').eq(3).should('have.text', '5.1K')
        cy.get('.stats__num').eq(3).should('have.css', 'color', 'rgb(20, 163, 188)')
        cy.get('.stats__num').eq(3).should('have.css', 'font-size', '42px')
        cy.get('.stats__num').eq(3).should('have.css', 'margin-right', '16px')
        cy.get('.stats__desc').eq(3).should('have.text', 'Screens live \n in 6 Airports')
    })

    //Ex3 -> it cannot be tested from Cypress that another application has opened; Cypress can only test web applications

    it('Ex4', () => {
        cy.visit('https://airportlabs.com/')
        cy.get('[href="https://www.linkedin.com/company/airport-labs"] > img').click()
        cy.url().should('eq', 'https://www.linkedin.com/company/airport-labs')
    })

    it('Ex5', () => {
        cy.visit('https://airportlabs.com/')
        cy.get('.logo').should('have.css', 'width', '80px')
        cy.get('.logo').should('have.css', 'height', '52px')
    })
})