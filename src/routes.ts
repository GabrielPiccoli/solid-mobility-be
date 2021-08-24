import { Router } from "express";
import { AuthenticateMotoristaController } from "./controllers/authenticate/AuthenticateMotoristaController";
import { CreateEnderecoController } from "./controllers/endereco/CreateEnderecoController";
import { CreateMotoristaController } from "./controllers/motorista/CreateMotoristaController";
import { CreateVanController } from "./controllers/van/CreateVanController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router()

//authenticate controllers
const authenticateMotoristaController = new AuthenticateMotoristaController()

//motorista controllers
const createMotoristaController = new CreateMotoristaController()

//van controllers
const createVanController = new CreateVanController()

//endereco controllers
const createEnderecoController = new CreateEnderecoController()

//authenticate routes
router.post('/login', authenticateMotoristaController.handle)

//motorista routes
router.post('/motoristas', createMotoristaController.handle)

//van routes
router.post('/vans', ensureAuthenticated, createVanController.handle)

//endereco routes
router.post('/enderecos', ensureAuthenticated, createEnderecoController.handle)


export { router }