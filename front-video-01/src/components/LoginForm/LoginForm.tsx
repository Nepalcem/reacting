const LoginForm = () => {
  return (
    <form>
      <div>
        <label className="username-field" htmlFor="username">
          Username
        </label>
        <input type="text" id="username" placeholder="User name" />
      </div>
      <div>
        <label className="password-field" htmlFor="password">
          Password
        </label>
        <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="button">Log in</button>
    </form>
  );
};

export default LoginForm;
