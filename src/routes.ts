import { Router } from "express";
import { AuthenticateMotoristaController } from "./controllers/authenticate/AuthenticateMotoristaController";
import { CreateEnderecoController } from "./controllers/endereco/CreateEnderecoController";
import { DeleteEnderecoController } from "./controllers/endereco/DeleteEnderecoController";
import { ListEnderecoController } from "./controllers/endereco/ListEnderecoController";
import { ListOneEnderecoController } from "./controllers/endereco/ListOneEnderecoController";
import { UpdateEnderecoController } from "./controllers/endereco/UpdateEnderecoController";
import { CreateMotoristaController } from "./controllers/motorista/CreateMotoristaController";
import { DeleteMotoristaController } from "./controllers/motorista/DeleteMotoristaController";
import { ListMotoristaController } from "./controllers/motorista/ListMotoristaController";
import { UpdateMotoristaController } from "./controllers/motorista/UpdateMotoristaController";
import { CreateParadaController } from "./controllers/parada/CreateParadaController";
import { DeleteParadaController } from "./controllers/parada/DeleteParadaController";
import { ListParadaController } from "./controllers/parada/ListParadaController";
import { UpdateParadaController } from "./controllers/parada/UpdateParadaController";
import { CreatePassageiroController } from "./controllers/passageiro/CreatePassageiroController";
import { DeletePassageiroController } from "./controllers/passageiro/DeletePassageiroController";
import { ListPassageiroController } from "./controllers/passageiro/ListPassageiroController";
import { UpdatePassageiroController } from "./controllers/passageiro/UpdatePassageiroController";
import { CreateRotaController } from "./controllers/rota/CreateRotaController";
import { DeleteRotaController } from "./controllers/rota/DeleteRotaController";
import { ListRotaController } from "./controllers/rota/ListRotaController";
import { UpdateRotaController } from "./controllers/rota/UpdateRotaController";
import { CreateVanController } from "./controllers/van/CreateVanController";
import { DeleteVanController } from "./controllers/van/DeleteVanController";
import { ListVanController } from "./controllers/van/ListVanController";
import { UpdateVanController } from "./controllers/van/UpdateVanController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router()

//authenticate controllers
const authenticateMotoristaController = new AuthenticateMotoristaController()

//motorista controllers
const createMotoristaController = new CreateMotoristaController()
const listMotoristaController = new ListMotoristaController()
const updateMotoristaController = new UpdateMotoristaController()
const deleteMotoristaController = new DeleteMotoristaController()

//van controllers
const createVanController = new CreateVanController()
const listaVanController = new ListVanController()
const updateVanController = new UpdateVanController()
const deleteVanController = new DeleteVanController()

//endereco controllers
const createEnderecoController = new CreateEnderecoController()
const listEnderecoController = new ListEnderecoController()
const listOneEnderecoController = new ListOneEnderecoController()
const updateEnderecoController = new UpdateEnderecoController()
const deleteEnderecoController = new DeleteEnderecoController

//rota controllers
const createRotaController = new CreateRotaController()
const listRotaController = new ListRotaController()
const updateRotaController = new UpdateRotaController()
const deleteRotaController = new DeleteRotaController()

//parada controllers
const createParadaController = new CreateParadaController()
const listParadaController = new ListParadaController()
const updateParadaController = new UpdateParadaController()
const deleteParadaController = new DeleteParadaController()

//passageiro controllers
const createPassageiroController = new CreatePassageiroController()
const listPassageiroController = new ListPassageiroController()
const updatePassageiroController = new UpdatePassageiroController()
const deletePassageiroController = new DeletePassageiroController()

//authenticate routes
router.post('/login', authenticateMotoristaController.handle)

//motorista routes
router.post('/motoristas', createMotoristaController.handle)
router.get('/me', ensureAuthenticated, listMotoristaController.handle)
router.put('/motoristas', ensureAuthenticated, updateMotoristaController.handle)
router.delete('/motoristas', ensureAuthenticated, deleteMotoristaController.handle)

//van routes
router.post('/vans', ensureAuthenticated, createVanController.handle)
router.get('/vans', ensureAuthenticated, listaVanController.handle)
router.put('/vans', ensureAuthenticated, updateVanController.handle)
router.delete('/vans', ensureAuthenticated, deleteVanController.handle)

//endereco routes
router.post('/enderecos', ensureAuthenticated, createEnderecoController.handle)
router.get('/endereco/:id', ensureAuthenticated, listOneEnderecoController.handle)
router.get('/enderecos', ensureAuthenticated, listEnderecoController.handle)
router.put('/enderecos', ensureAuthenticated, updateEnderecoController.handle)
router.delete('/enderecos/:id', ensureAuthenticated, deleteEnderecoController.handle)

//rota routes
router.post('/rotas', ensureAuthenticated, createRotaController.handle)
router.get('/rotas', ensureAuthenticated, listRotaController.handle)
router.put('/rotas', ensureAuthenticated, updateRotaController.handle)
router.delete('/rotas', ensureAuthenticated, deleteRotaController.handle)

//parada routes
router.post('/paradas', ensureAuthenticated, createParadaController.handle)
router.get('/paradas', ensureAuthenticated, listParadaController.handle)
router.put('/paradas', ensureAuthenticated, updateParadaController.handle)
router.delete('/paradas', ensureAuthenticated, deleteParadaController.handle)

//passageiro routes
router.post('/passageiros', ensureAuthenticated, createPassageiroController.handle)
router.get('/passageiros', ensureAuthenticated, listPassageiroController.handle)
router.put('/passageiros', ensureAuthenticated, updatePassageiroController.handle)
router.delete('/passageiros', ensureAuthenticated, deletePassageiroController.handle)

export { router }