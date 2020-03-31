import React, { useState } from 'react';
import { upload, useUserLogout, useUser } from '../services/authService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
  const [file, setFile] = useState('');
  const user = useUser();
  let history = useHistory();

  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      const res = await upload({file})
      console.log(res);
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <Container>
      <h1>Profile</h1>
      <p>Username</p>
      <p>{user.username}</p>
      <p>Campus</p>
      <p>{user.campus}</p>
      <p>Course</p>
      <p>{user.course}</p>
      <Link to="/" onClick={useUserLogout}>
        Logout
      </Link>

      <Form onSubmit={handleSubmit} >
            <div style={{textAlign: 'center'}}>
              <Button variant="primary" type="submit" >
                Edit Photo
              </Button>
            </div>
          </Form>    
    </Container>
  );
}

export default ProfilePage;
