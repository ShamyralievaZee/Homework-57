import React from 'react';
import { User } from '../../types';
import UserItem from '../UserItem/UserItem.tsx';

interface UsersProps {
  users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      <h4>User List</h4>
      {users.length > 0 ? (
        <ul className="list-group">
          {users.map((user, index) => (
            <UserItem key={index} user={user} />
          ))}
        </ul>
      ) : (
        <p>Empty. Add users.</p>
      )}
    </div>
  );
};

export default Users;
