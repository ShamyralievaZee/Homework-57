import UserForm from '../UserForm/UserForm.tsx';
import Users from '../Users/Users.tsx';

const UserControl = () => {
      return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <UserForm/>
          </div>
          <div className="col-md-6">
            <Users/>
          </div>
        </div>
      </div>
      );
};

export default UserControl;