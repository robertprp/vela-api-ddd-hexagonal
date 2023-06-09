import { VelaController } from "../../../shared/infrastructure/Controllers/VelaController";
import {UserCreateUseCase} from "../../application/UserCreateUseCase";


// @ts-ignore
@registerController()
export class UserCreateController extends VelaController {
    path = '/users'
    method = 'POST'

    constructor(
        private readonly createUser: UserCreateUseCase
    ) {
        super()
        // TODO: Request validation here
    }

    async run (request: Request, response: Response): Promise<void> {
        const userData = request.body
        const user = await this.createUser.run(userData)

        // TODO: Send http response data here
    }
}
