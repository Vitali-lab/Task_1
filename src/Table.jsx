import { data } from './data' //  используем начальные данные
import { Qualities } from './components/qualities'
import './Table.css'
import { Professions } from './components/professions'
import { FaCaretDown } from "react-icons/fa";
import { useState } from 'react';

function Table() {

	const {users} = data


	const [icon, setIcon] = useState({
		'age': false,
		'name':false,
		'profession':false,
	})
	const [sortUser , setSortUser] = useState(users)
	const [isSorted, setIsSorted] = useState(false)
	

	const filterAge = () => {
        setSortUser(()=>{return [...users].sort((a,b)=> icon.age?a.age - b.age : b.age - a.age)})
		setIsSorted(true)
		setIcon(() => ({profession:false,name:false, age:!icon.age }))
								
	}

	const filterName = () => {
        setSortUser(()=>{return [...users].sort((a,b)=> icon.name? a.name.localeCompare(b.name) : b.name.localeCompare(a.name) )})
		setIsSorted(true)
		setIcon(() => ({age:false,profession:false,name:!icon.name }))
	}

	const filterProfession = () => {
        setSortUser(()=>{return [...users].sort((a,b)=> icon.profession? a.profession.name.localeCompare(b.profession.name) : b.profession.name.localeCompare(a.profession.name))})
		setIsSorted(true)
		setIcon(() => ({age:false,name:false, profession:!icon.profession }))
	}

	const getUsers = (users) => {
		return users.map((user)=>{
		return (
		<tr key={user._id}>
			<td>{user.name}</td>
			<td>{user.age}</td>
			<td><Qualities qualities = {user.qualities} /></td>
			<td><Professions professions = {user.profession}/></td>
			<td><button onClick={()=>{console.log(user)}}>Удалить</button></td>
		</tr>)
		})
	}
	



	return (
		<>
        <h1>Table</h1>
		{isSorted?<button className='filterButton' onClick={()=>{
			setIsSorted(false)
			setIcon({ age: false, name: false, profession: false });
            setSortUser(users);
			}}>Сбросить сортировку</button>: ''}
		<table>
			<thead>
				<tr>
					<th onClick={filterName}> Имя <button className={!icon.name?'icon':'reversIcon'} ><FaCaretDown /></button></th>
					<th  onClick={filterAge}>Возраст <button className={!icon.age?'icon':'reversIcon'}><FaCaretDown /></button></th>
					<th>Качества</th>
					<th onClick={filterProfession}>Профессия <button className={`${!icon.profession?'icon':'reversIcon'}`} ><FaCaretDown /></button></th>
					<th>Удалить</th>
				</tr>
			</thead>
			<tbody>
				{!isSorted ? getUsers(users): getUsers(sortUser)}
			</tbody>
		</table>
		</>
	)
}

export default Table
