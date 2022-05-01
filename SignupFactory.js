var faker = require('faker')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()


        var data = {
            name: `${firstName} ${lastName}`,
            cpf: '01234567890',
            email: faker.internet.email(firstName),
            whatsapp: '4899999999',
            address: {
                postalcode: '88119368',
                street: 'Rua Helmuth Fett',
                number: '254',
                details: 'Casa 01',
                district: 'Potecas',
                city_state: 'São José/SC'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg.jpg'
        }

        return data

    }



}