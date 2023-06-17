import { VelaController } from "../../../shared/infrastructure/Controllers/VelaController";
import {BoatCreateUseCase} from "../../application/BoatCreateUseCase";
import {IBoat} from "../../domain/Boat";


// @ts-ignore
@registerController()
export class BoatCreateController extends VelaController {
    path = '/boats'
    method = 'POST'

    constructor(
        private readonly createBoat: BoatCreateUseCase
    ) {
        super()
        // TODO: Request validation here
    }

    async run (request: Request, response: Response): Promise<void> {
        const boatData = request.body as unknown as IBoat
        const user = await this.createBoat.run(boatData)

        // TODO: Send http response data here
    }
}
