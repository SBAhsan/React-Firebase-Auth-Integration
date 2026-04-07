import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Home = () => {

    const authInfo = useContext(AuthContext);
    console.log(authInfo);

    return (
        <div>
            <p>This is home</p>
        </div>
    );
};

export default Home;