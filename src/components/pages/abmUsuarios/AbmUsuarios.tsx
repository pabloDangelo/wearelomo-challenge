import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { IUser } from '../../../common/types';
import { getLocalData, saveLocalData } from '../../Utilities';

const AbmUsuarios = () => {

  const urlUsers = 'https://gorest.co.in/public/v2/users';
  const [users, setUsers] = useState<IUser[]>([]);
  const [items, setItems] = useState<any[]>([]);

  const deleteUser = (id: number) => {

      // eslint-disable-next-line no-restricted-globals
      if(confirm('Confirma que desea eliminar el usuario?') === true){
          let index = users.findIndex(u => u.id === id);
          let newUsers = [...users];
          newUsers.splice(index, 1);
          setUsers(newUsers);
          saveLocalData('savedUsers', newUsers);
      }
  }

  const updateItems = () =>{

    setItems(users.map((u: IUser) => {
      let completeName = u.name.split(' ');
      let firstName = completeName[0];
      let lastName = completeName[1];

      return(
        <tr key={u.id}>
          <td>{u.id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{u.email}</td>
          <td>
            <Button variant="primary">Edit</Button>
          </td>
          <td>
            <Button variant="danger" onClick={() => deleteUser(u.id)}>Delete</Button>
          </td>
        </tr>)
    }))

  } 

  useEffect(()=> { 

    let savedUsers = getLocalData('savedUsers');
    console.log(savedUsers)

    if((savedUsers && savedUsers.length === 0) || !savedUsers) {

      fetch(urlUsers)
      .then<IUser[]>(response => response.json())
      .then(users => {

        setUsers(users);
        saveLocalData('savedUsers', users);

      })
      .catch(error => console.error(error));  

    } else {

    console.log(savedUsers)

      setUsers(savedUsers);

    }

    updateItems();

  }, [users])

  return (
    <section className='AbmUsuarios'>
      <Table bordered hover responsive className='mt-5'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody >
          {items}
        </tbody>
      </Table>
    </section>
  )
}

export default AbmUsuarios

