import { Router } from "express";
import { AuthenticateMotoristaController } from "./controllers/authenticate/AuthenticateMotoristaController";
import { CreateEnderecoController } from "./controllers/endereco/CreateEnderecoController";
import { CreateMotoristaController } from "./controllers/motorista/CreateMotoristaController";
import { CreateParadaController } from "./controllers/parada/CreateParadaController";
import { CreateRotaController } from "./controllers/rota/CreateRotaController";
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

//rota controllers
const createRotaController = new CreateRotaController()

//parada controllers
const createParadaController = new CreateParadaController()

//authenticate routes
router.post('/login', authenticateMotoristaController.handle)

//motorista routes
router.post('/motoristas', createMotoristaController.handle)

//van routes
router.post('/vans', ensureAuthenticated, createVanController.handle)

//endereco routes
router.post('/enderecos', ensureAuthenticated, createEnderecoController.handle)

//rota routes
router.post('/rotas', ensureAuthenticated, createRotaController.handle)

//parada routes
router.post('/paradas', ensureAuthenticated, createParadaController.handle)

export { router }