Cypress.Commands.add('cadastro', (usuario) => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: usuario,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.contain('Cadastro realizado com sucesso');
    
  })

  Cypress.Commands.add('erro_cadastro', (usuario) => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: usuario,
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.contain('Este email já está sendo usado');
    })
  })
  
  Cypress.Commands.add('consulta', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)

    })
    })
  })