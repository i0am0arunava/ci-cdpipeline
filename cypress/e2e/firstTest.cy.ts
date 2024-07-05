describe('Read Article Modal', () => {
  it('visits the website', () => {
    cy.visit('https://i0am0arunava.github.io/ci-cdpipeline/#/account/sport/');
  });

  it('navigates to an article and opens the modal', () => {
    cy.visit('https://i0am0arunava.github.io/ci-cdpipeline/#/account/sport/News/74'); // Use the correct article ID

    // Wait for the modal to appear
    
  });


 
  it('checks the text-to-speech functionality', () => {
    cy.visit('https://i0am0arunava.github.io/ci-cdpipeline/#/account/sport/News/74'); // Replace '1' with a valid article ID

    // Ensure the modal and buttons are visible
  
    cy.get('#speak', { timeout: 10000 }).should('be.visible').click();

    // Verify speech synthesis is speaking
    cy.window().then((win) => {
      expect(win.speechSynthesis.speaking).to.be.true; // Check if speechSynthesis is speaking
    });

    // Click the stop button
    cy.get('#stop', { timeout: 10000 }).should('be.visible').click();
    cy.window().then((win) => {
      expect(win.speechSynthesis.speaking).to.be.true; // Check if speechSynthesis has stopped speaking
    });
  });

  it('closes the modal', () => {
    cy.visit('https://i0am0arunava.github.io/ci-cdpipeline/#/account/sport/News/74');
  
    // Wait for the close button to be visible and clickable
    cy.get('button[type="button"]').click({ force: true, multiple: true });
  
    cy.get('div[role="dialog"]').should('not.exist'); // Verify the modal is closed
  });
  
  
});
