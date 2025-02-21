import Menu from '../menu/Menu';
import Header from '../header/Header';
import './ListarPlanilha.css'

const ListarPlanilha = () => {
    return (
        <div>
            <Header></Header>
            <div className="workspace">
                <Menu />
                <main className="content">
                    <div className="containerList">
                        <h1>Planilhas</h1>
                        <p>Acesse uma coleção de planilhas úteis para facilitar suas tarefas diárias e otimizar seu trabalho.</p>
                        <ul className="listTitle">
                            <li>Nome </li>
                            <li>Ação</li>
                        </ul>
                        <ul className="listPlan">
                            <li>
                                <span>Cálculo Simples Nacional.xisx</span>
                                <a href="#">Download</a>
                            </li>
                            <li>
                                <span>Tese Exclusão do ICMS BC PIS Cofins - Bloco C170.xisb</span>
                                <a href="#">Download</a>
                            </li>
                            <li>
                                <span>Tese Exclusão do PIS Cofins da própria BC-Bloco C170.xisb</span>
                                <a href="#">Download</a>
                            </li>
                            <li>
                                <span>Tese Gross Up-Bloco C170.xisb</span>
                                <a href="#">Download</a>
                            </li>
                            <li>
                                <span>Tese LC 192- Bloco C170.xlsb</span>
                                <a href="#">Download</a>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ListarPlanilha;