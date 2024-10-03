import UserForm from '../UserForm/UserForm.tsx';
import Users from '../Users/Users.tsx';
import { User } from '../../types';
import { useState } from 'react';

const UserControl = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <UserForm addUser={addUser} />
        </div>
        <div className="col-md-6">
          <Users users={users} />
        </div>
      </div>
    </div>
  );
};
export default UserControl;