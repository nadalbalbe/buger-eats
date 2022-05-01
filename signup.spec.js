import signup from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'

describe('Signup', ()=> {
//    beforeEach( function() {
//        cy.fixture('deliver.json').then((d) => {
//            this.deliver = d
//        })
//    })


    it('User should be deliver', function() {

        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })
    it('Incorrect document', function () {

        var deliver = SignupFactory.deliver()
        deliver.cpf = '000000141aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
    it('Incorrect email', function () {

        var deliver = SignupFactory.deliver()
        deliver.email = 'balbenadal.teste.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

})
