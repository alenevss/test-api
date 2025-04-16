describe('Cadastro via API', () => {
  it('Realizar cadastro com sucesso', () => {
    const usuario = {
      nome: 'Amendoim',
      email: 'alessa.neves21@outlook.com',
      password: 'teste123',
      administrador: 'true'
    }

    cy.cadastro(usuario)
   })

  it('Erro ao cadastrar usuário já cadastrado', () => {
    const usuario = {
      nome: 'Alessandra',
      email: 'alessa.neves21@gmail.com',
      password: 'teste123',
      administrador: 'true'
    }

    cy.erro_cadastro(usuario)
   })
})

describe('Consultar usuário via API', () => {
  it('Consultar usuário com sucesso', () => {
    const usuario = {
      nome: 'Alessandra'
    }

    cy.consulta(usuario)
   })
})