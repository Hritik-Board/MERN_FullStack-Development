const UserProfile = (props) => {
  console.log(props);
  return (
    <div style={{ border: "1px  solid", padding: "20px" }}>
      <h2>User Profile</h2>
      <p>
        <b>Name</b>: {props.name}
      </p>

      <p>
        <b>Name</b>: Emma
      </p>
    </div>
  );
};

export default UserProfile;
