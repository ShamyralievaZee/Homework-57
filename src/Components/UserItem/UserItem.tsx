import React from 'react';
import { User } from '../../types';

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li className="list-group-item">
      {user.name}({user.email}) / {user.role} /{' '}
      {user.active ? 'active' : 'inactive'}
    </li>
  );
};

export default UserItem;
