import React, { useState } from 'react';
import {User} from '../../types';


interface UserFormProps {
  addUser: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'user' | 'editor' | 'admin'>('user');
  const [active, setActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = { name, email, role, active };
    addUser(newUser);
    setName('');
    setEmail('');
    setRole('user');
    setActive(false);
  };

  return (
    <div>
      <h4>User Form</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Role</label>
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value as 'user' | 'editor' | 'admin')}
          >
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          <label className="form-check-label">Active</label>
        </div>
        <button type="submit" className="btn btn-outline-secondary">Create User</button>
      </form>
    </div>

  );
};

export default UserForm;
