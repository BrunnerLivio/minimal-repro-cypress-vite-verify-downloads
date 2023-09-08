describe('Verify Download', () => {
  it('Downloads a file', () => {
    cy.visit('/')
    cy.contains('Download').click()
    cy.verifyDownload(`index.html`, {
      timeout: 500,
      contains: '<a href="index.html" download>Download</a>',
    })
  })
})
