it('cy.request() - verify response ', () => {
  cy.visit('http://localhost:3000').then((response) => {
    // expect(response).property('status').to.equal(200)
   })

   describe('Type input', () => {
    cy.get('input[name="name"]').type('Mailchimp')
    .should('have.value','Mailchimp')
    cy.get('input[name="comment"]').type('heck yea!{enter}').should('have.value','heck yea!')
    
    });

    describe('Delete all', () => {
      it('should delete all comments', () => {
        cy.get('button[data-testref="deleteButton"]').click()
      })
      
    })
})

