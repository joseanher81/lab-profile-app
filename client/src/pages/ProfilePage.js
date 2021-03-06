import React, { useState, useContext } from 'react';
import { logout, upload } from '../services/authService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {UserContext} from './../contexts/userContext';

const ProfilePage = withRouter(({ history }) => {
  const {user} = useContext(UserContext);
  const [file, setFile] = useState('');

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

  // const doLogout = async (e) => {
  //   try {
  //     const res = await logout()
  //     console.log(res);
  //     history.push("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return(
    <Container>
      <h1>Profile</h1>
      <p>Username</p>
      <p>{user.username}</p>
      <p>Campus</p>
      <p>{user.campus}</p>
      <p>Course</p>
      <p>{user.course}</p>
      <Link to="/" onClick={logout}>
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
});

export default ProfilePage;
