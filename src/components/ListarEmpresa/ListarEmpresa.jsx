import Menu from '../menu/Menu';
import Header from '../header/Header';
import './ListarEmpresa.css'
import { GrView } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";

const ListarEmpresa = () => {
    return (
        <div>
            <Header></Header>
            <div className="workspace">
                <Menu />
                <main className="content">
                        <div className="containerListEmpresa">
                        <div className="titleEmpresa">
                            <h1>Empresa</h1>
                            <div>
                                <span className="lupa">
                                    <IoMdSearch />
                                </span>
                                
                                <input type="text" className='pesquisar' placeholder="Pesquisar"/>
                                <a href="/cadastrarempresa" className='cadastrar'>Cadastrar</a>
                            </div>
                        </div>
                        <ul className="listEmpresa">
                            <li>
                                <ul>
                                    <li>
                                        <div>
                                            <span>Nome:</span>
                                            <p> W. Wanderosch Carvel Auto Pec...</p>
                                        </div>
                                        <div>
                                            <span>E-mail:</span>
                                            <p>BARRAAUTOPECAS@GMAIL.COM</p>
                                        </div>
                                    </li>
                                    <li
                                    >
                                        <div>
                                            <span>CNPJ:</span>
                                            <p>34.057.391/0001-00</p>
                                        </div>
                                        <div>
                                            <span>Estado: </span>
                                            <p>RJ</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span>Contato:</span>
                                            <p>(22) 3081-2251</p>
                                        </div>
                                        <div>
                                            <span>Cidade:</span>
                                            <p>Macaé</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <GrView className="buttonsAction"/>
                                        <BiEdit className="buttonsAction"/>
                                        <AiFillDelete className="delete"/>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li>
                                        <div>
                                            <span>Nome:</span>
                                            <p> W. Wanderosch Carvel Auto Pec...</p>
                                        </div>
                                        <div>
                                            <span>E-mail:</span>
                                            <p>BARRAAUTOPECAS@GMAIL.COM</p>
                                        </div>
                                    </li>
                                    <li
                                    >
                                        <div>
                                            <span>CNPJ:</span>
                                            <p>34.057.391/0001-00</p>
                                        </div>
                                        <div>
                                            <span>Estado: </span>
                                            <p>RJ</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span>Contato:</span>
                                            <p>(22) 3081-2251</p>
                                        </div>
                                        <div>
                                            <span>Cidade:</span>
                                            <p>Macaé</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <GrView className="buttonsAction"/>
                                        <BiEdit className="buttonsAction"/>
                                        <AiFillDelete className="delete"/>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li>
                                        <div>
                                            <span>Nome:</span>
                                            <p> W. Wanderosch Carvel Auto Pec...</p>
                                        </div>
                                        <div>
                                            <span>E-mail:</span>
                                            <p>BARRAAUTOPECAS@GMAIL.COM</p>
                                        </div>
                                    </li>
                                    <li
                                    >
                                        <div>
                                            <span>CNPJ:</span>
                                            <p>34.057.391/0001-00</p>
                                        </div>
                                        <div>
                                            <span>Estado: </span>
                                            <p>RJ</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span>Contato:</span>
                                            <p>(22) 3081-2251</p>
                                        </div>
                                        <div>
                                            <span>Cidade:</span>
                                            <p>Macaé</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <GrView className="buttonsAction"/>
                                        <BiEdit className="buttonsAction"/>
                                        <AiFillDelete className="delete"/>
                                    </li>
                                </ul>
                            </li>


                            <li>
                                <ul>
                                    <li>
                                        <div>
                                            <span>Nome:</span>
                                            <p> W. Wanderosch Carvel Auto Pec...</p>
                                        </div>
                                        <div>
                                            <span>E-mail:</span>
                                            <p>BARRAAUTOPECAS@GMAIL.COM</p>
                                        </div>
                                    </li>
                                    <li
                                    >
                                        <div>
                                            <span>CNPJ:</span>
                                            <p>34.057.391/0001-00</p>
                                        </div>
                                        <div>
                                            <span>Estado: </span>
                                            <p>RJ</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span>Contato:</span>
                                            <p>(22) 3081-2251</p>
                                        </div>
                                        <div>
                                            <span>Cidade:</span>
                                            <p>Macaé</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <GrView className="buttonsAction"/>
                                        <BiEdit className="buttonsAction"/>
                                        <AiFillDelete className="delete"/>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>   
                </main>
            </div>  
        </div>
    )
}

export default ListarEmpresa;