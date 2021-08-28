import { Router } from "express";
import { AuthenticateMotoristaController } from "./controllers/authenticate/AuthenticateMotoristaController";
import { CreateEnderecoController } from "./controllers/endereco/CreateEnderecoController";
import { ListEnderecoController } from "./controllers/endereco/ListEnderecoController";
import { CreateMotoristaController } from "./controllers/motorista/CreateMotoristaController";
import { CreateParadaController } from "./controllers/parada/CreateParadaController";
import { ListParadaController } from "./controllers/parada/ListParadaController";
import { CreatePassageiroController } from "./controllers/passageiro/CreatePassageiroController";
import { ListPassageiroController } from "./controllers/passageiro/ListPassageiroController";
import { CreateRotaController } from "./controllers/rota/CreateRotaController";
import { ListRotaController } from "./controllers/rota/ListRotaController";
import { CreateVanController } from "./controllers/van/CreateVanController";
import { ListVanController } from "./controllers/van/ListVanController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router()

//authenticate controllers
const authenticateMotoristaController = new AuthenticateMotoristaController()

//motorista controllers
const createMotoristaController = new CreateMotoristaController()

//van controllers
const createVanController = new CreateVanController()
const listaVanController = new ListVanController()

//endereco controllers
const createEnderecoController = new CreateEnderecoController()
const listEnderecoController = new ListEnderecoController()

//rota controllers
const createRotaController = new CreateRotaController()
const listRotaController = new ListRotaController()

//parada controllers
const createParadaController = new CreateParadaController()
const listParadaController = new ListParadaController()

//passageiro controllers
const createPassageiroController = new CreatePassageiroController()
const listPassageiroController = new ListPassageiroController()

//authenticate routes
router.post('/login', authenticateMotoristaController.handle)

//motorista routes
router.post('/motoristas', createMotoristaController.handle)

//van routes
router.post('/vans', ensureAuthenticated, createVanController.handle)
router.get('/vans', ensureAuthenticated, listaVanController.handle)

//endereco routes
router.post('/enderecos', ensureAuthenticated, createEnderecoController.handle)
router.get('/enderecos', ensureAuthenticated, listEnderecoController.handle)

//rota routes
router.post('/rotas', ensureAuthenticated, createRotaController.handle)
router.get('/rotas', ensureAuthenticated, listRotaController.handle)

//parada routes
router.post('/paradas', ensureAuthenticated, createParadaController.handle)
router.get('/paradas', ensureAuthenticated, listParadaController.handle)

//passageiro routes
router.post('/passageiros', ensureAuthenticated, createPassageiroController.handle)
router.get('/passageiros', ensureAuthenticated, listPassageiroController.handle)

export { router }