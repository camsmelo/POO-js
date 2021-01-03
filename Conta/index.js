import {Cliente} from "./Conta/Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678900)
const gerente = new Gerente("Ricardo", 5000, 12345678901)

const estaLogado = SistemaAutenticacao.login(diretor, "123456789")

console.log(estaLogado)