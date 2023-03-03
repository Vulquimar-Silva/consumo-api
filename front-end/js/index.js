
function ListUsers() {

    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3333/users')
             .then(res => setUsers(res.data))
    }, [])

    return (
        <div className="container">
            <h1>Consumindo API local com React CDN</h1>

            <div className="table-responsive">
                {(users === null || users.length === 0) ?

                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th style={{ textAlign: 'center' }}>Vixi, não encontrei nada por aqui</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: 'center' }}><p>Sem dados para apresentar</p></td>
                            </tr>
                        </tbody>
                    </table>
                    :
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Cargo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.position}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}


const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(ListUsers));

