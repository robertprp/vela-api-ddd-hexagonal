import { VelaController } from "../../../shared/infrastructure/Controllers/VelaController";
import {UserCreateUseCase} from "../../application/UserCreateUseCase";
import {IUser} from "../../domain/User";


// @ts-ignore
@registerController()
export class UsersCreateController extends VelaController {
    path = '/users'
    method = 'POST'

    constructor(
        private readonly createUser: UserCreateUseCase
    ) {
        super()
        // TODO: Request validation here
    }

    async run (request: Request, response: Response): Promise<void> {
        const data = request.body as unknown as IUser
        const user = await this.createUser.run(data)

        // TODO: Send http response data here
    }
}
