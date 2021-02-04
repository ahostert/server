import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async login({ request, response }: HttpContextContract) {
    const { email, password } = request.all()
    console.log(email, password)
    response.send('Handled!')
  }
}
