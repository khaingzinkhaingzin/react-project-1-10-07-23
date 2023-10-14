import { useState, useEffect } from "react";

const DynamicDataComponent = ({ userId }) => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        // FETCH DATA WHEN THE userId PROP CHANGES 
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await response.json();
            setUserData(data);
        };
        fetchData();
    }, [userId]);

    return <div>{userData ? `User: ${userData.name}` : 'Loading...'}</div>;
};

const App = () => {
    return (<div>
        <h1>App component</h1>
        <DynamicDataComponent userId={5} />
    </div>);
};

export default App;