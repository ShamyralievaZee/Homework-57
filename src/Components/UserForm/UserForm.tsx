const UserForm = () => {
  return (
    <div>
      <h4>User Form</h4>
  <form>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Role</label>
        <select
          className="form-select"
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
        />
        <label className="form-check-label">Active</label>
      </div>
      <button type="submit" className="btn btn-outline-secondary">Create</button>
    </form>
</div>
)
  ;
};

export default UserForm;
