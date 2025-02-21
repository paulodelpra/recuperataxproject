import Menu from '../menu/Menu';
import Header from '../header/Header';
import "./CadastroEmpresa.css";
import { IoArrowBackSharp } from "react-icons/io5";

const CadastroEmpresa = () => {
    return (
    <div>
        <Header></Header>
          
        <div className="workspace">
            <Menu />
            <main className="content">
                <div class="group-title">
                    <div>
                        <h1>
                            <IoArrowBackSharp />
                            Cadastro de Empresas
                        </h1>
                    </div>
                    <button>Salvar</button>
                </div>
                <div class="containerForm">
                    <div>
                        <a href="#">Dados Gerais</a>
                        <a href="#">Filiais</a>
                    </div>
                    <form action="">
                        
                        <div class="form-group">
                            <div className="group-line">
                                <label for="cnpj">CNPJ</label><br />
                                <input type="text" id="cnpj" name="cnpj" required />
                            </div>

                            <div className="group-line">
                                <label for="nome">Nome</label><br />
                                <input type="text" id="nome" name="nome" require />
                            </div>

                            <div className="group-line">
                                <label for="nome-fantasia">Nome Fantasia</label><br />
                                <input type="text" id="nome-fantasia" name="nome-fantasia" required />
                            </div>
                        </div>

                        
                        <div class="form-group">
                            <div className="group-line">
                                <label for="contato">Contato</label><br />
                                <input type="text" id="contato" name="contato" required />
                            </div>

                            <div className="group-line">
                                <label for="email">E-mail</label><br />
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="group-line">
                                <label for="cep">CEP</label><br />
                                <input type="text" id="cep" name="cep" required />
                            </div>
                        </div>

                        
                        <div class="form-group">
                        <div>
                            <label for="pais">País</label><br />
                            <input type="text" id="pais" name="pais" required />
                        </div>

                            <div className="group-line">
                                <label for="estado">Estado</label><br />
                                <input type="text" id="estado" name="estado" required />
                            </div>

                            <div className="group-line">
                                <label for="cidade">Cidade</label><br />
                                <input type="text" id="cidade" name="cidade" required />
                            </div>

                            <div className="group-line">
                                <label for="bairro">Bairro</label><br />
                                <input type="text" id="bairro" name="bairro" required />
                            </div>
                        </div>

                        
                        <div class="form-group">
                            <div>
                                <label for="rua">Rua</label><br />
                                <input type="text" id="rua" name="rua" required />
                            </div>

                            <div className="group-line">
                                <label for="numero">Número</label><br />
                                <input type="text" id="numero" name="numero" required />
                            </div>

                            <div className="group-line">
                                <label for="complemento">Complemento</label><br />
                                <input type="text" id="complemento" name="complemento" />
                            </div>
                        </div>

                    </form>
                </div>
            </main>
        </div>
    </div>
    )
}

export default CadastroEmpresa;