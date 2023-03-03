
function ListUsers() {

    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3333/users')
            .then(res => setUsers(res.data))
    }, [users])

    return (
        <div className="container">
            <h1>Consumindo API local com React</h1>

            <div className="table-responsive">
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
            </div>
        </div>
    )
}


const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(ListUsers));

