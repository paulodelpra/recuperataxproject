import "./Menu.css";
import { RxHome } from "react-icons/rx";
import { LiaEdit } from "react-icons/lia";
import { AiOutlineFile } from "react-icons/ai";
import { BiSolidReport } from "react-icons/bi";
import { FaSearchDollar } from "react-icons/fa";
import { LiaRobotSolid } from "react-icons/lia";
import { FaPeopleGroup } from "react-icons/fa6";

const Menu = () => {
    return (
        <nav className="sidebar-navigation">
            <ul>
                <li><RxHome className="icon"/></li>
                <li><a href="/listarempresa"><LiaEdit className="icon"/></a></li>
                <li><AiOutlineFile className="icon"/></li>
                <li><BiSolidReport className="icon"/></li>
                <li><FaSearchDollar className="icon"/></li>
                <li><LiaRobotSolid className="icon"/></li>
                <li><a href="/listarplanilha"><FaPeopleGroup className="icon"/></a></li>
            </ul>

            <div className="submenu">
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Cadastros</a></li>
                    <li><a href="#">Arquivos Fiscais</a></li>
                    <li><a href="#">Relatório</a></li>
                    <li><a href="#">Diagnóstico Express</a></li>
                    <li><a href="#">Consultor IA</a></li>
                    <li><a href="#">Área de Membros</a></li>
                </ul>
            </div>
        </nav>

    )
}

export default Menu;