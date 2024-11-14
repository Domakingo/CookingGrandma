import { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'

function Dashboard() {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await axios.get('https://zac.hackclub.app/api/user/groups');
                setGroups(response.data);
            } catch (err) {
                alert('Failed to fetch groups');
            }
        };
        fetchGroups();
    }, []);

    return (
        <div>
            <h1>Your Groups</h1>
            <ul>
                {groups.map(group => (
                    <li key={group.group_id}>{group.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
