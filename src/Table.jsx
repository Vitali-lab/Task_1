import { data } from './data' //  используем начальные данные

import './Table.css'

function Table() {
	return (
		<>
			<h1>Table</h1>
					<table>
						<thead>
							<tr>
								<th>Имя</th>
								<th>Возраст</th>
								<th>Удалить</th>
							</tr>
						</thead>
						<tbody>
							{data.map((user)=>{
								return (
									<tr key={user._id}>
										<td>{user.name}</td>
										<td>{user.age}</td>
										<td><button onClick={()=>{console.log(user)}}>Удалить</button></td>
									</tr>
								)
							})}
							
						</tbody>
					</table>
		</>
	)
}

export default Table
