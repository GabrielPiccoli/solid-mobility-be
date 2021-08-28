import { Router } from "express";
import { AuthenticateMotoristaController } from "./controllers/authenticate/AuthenticateMotoristaController";
import { CreateEnderecoController } from "./controllers/endereco/CreateEnderecoController";
import { ListEnderecoController } from "./controllers/endereco/ListEnderecoController";
import { UpdateEnderecoController } from "./controllers/endereco/UpdateEnderecoController";
import { CreateMotoristaController } from "./controllers/motorista/CreateMotoristaController";
import { UpdateMotoristaController } from "./controllers/motorista/UpdateMotoristaController";
import { CreateParadaController } from "./controllers/parada/CreateParadaController";
import { ListParadaController } from "./controllers/parada/ListParadaController";
import { UpdateParadaController } from "./controllers/parada/UpdateParadaController";
import { CreatePassageiroController } from "./controllers/passageiro/CreatePassageiroController";
import { ListPassageiroController } from "./controllers/passageiro/ListPassageiroController";
import { UpdatePassageiroController } from "./controllers/passageiro/UpdatePassageiroController";
import { CreateRotaController } from "./controllers/rota/CreateRotaController";
import { ListRotaController } from "./controllers/rota/ListRotaController";
import { UpdateRotaController } from "./controllers/rota/UpdateRotaController";
import { CreateVanController } from "./controllers/van/CreateVanController";
import { ListVanController } from "./controllers/van/ListVanController";
import { UpdateVanController } from "./controllers/van/UpdateVanController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router()

//authenticate controllers
const authenticateMotoristaController = new AuthenticateMotoristaController()

//motorista controllers
const createMotoristaController = new CreateMotoristaController()
const updateMotoristaController = new UpdateMotoristaController()

//van controllers
const createVanController = new CreateVanController()
const listaVanController = new ListVanController()
const updateVanController = new UpdateVanController()

//endereco controllers
const createEnderecoController = new CreateEnderecoController()
const listEnderecoController = new ListEnderecoController()
const updateEnderecoController = new UpdateEnderecoController()

//rota controllers
const createRotaController = new CreateRotaController()
const listRotaController = new ListRotaController()
const updateRotaController = new UpdateRotaController()

//parada controllers
const createParadaController = new CreateParadaController()
const listParadaController = new ListParadaController()
const updateParadaController = new UpdateParadaController()

//passageiro controllers
const createPassageiroController = new CreatePassageiroController()
const listPassageiroController = new ListPassageiroController()
const updatePassageiroController = new UpdatePassageiroController()

//authenticate routes
router.post('/login', authenticateMotoristaController.handle)

//motorista routes
router.post('/motoristas', createMotoristaController.handle)
router.put('/motoristas', ensureAuthenticated, updateMotoristaController.handle)

//van routes
router.post('/vans', ensureAuthenticated, createVanController.handle)
router.get('/vans', ensureAuthenticated, listaVanController.handle)
router.put('/vans', ensureAuthenticated, updateVanController.handle)

//endereco routes
router.post('/enderecos', ensureAuthenticated, createEnderecoController.handle)
router.get('/enderecos', ensureAuthenticated, listEnderecoController.handle)
router.put('/enderecos', ensureAuthenticated, updateEnderecoController.handle)

//rota routes
router.post('/rotas', ensureAuthenticated, createRotaController.handle)
router.get('/rotas', ensureAuthenticated, listRotaController.handle)
router.put('/rotas', ensureAuthenticated, updateRotaController.handle)

//parada routes
router.post('/paradas', ensureAuthenticated, createParadaController.handle)
router.get('/paradas', ensureAuthenticated, listParadaController.handle)
router.put('/paradas', ensureAuthenticated, updateParadaController.handle)

//passageiro routes
router.post('/passageiros', ensureAuthenticated, createPassageiroController.handle)
router.get('/passageiros', ensureAuthenticated, listPassageiroController.handle)
router.put('/passageiros', ensureAuthenticated, updatePassageiroController.handle)

export { router }