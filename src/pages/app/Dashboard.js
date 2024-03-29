import React, { useContext, useEffect, useState } from 'react'
import Card from '../../components/Card'
import News from '../../components/News'
import Layout from '../../components/Layout'
import BannerHeader from '../../components/BannerHeader'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader'
import { MyContext } from '../../context/Context'

function Dashboard() {

    const { checkAuth } = useContext(MyContext)
    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        checkAuth();

    }, [checkAuth]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        const Check = localStorage.getItem('userLoggedIn');
        if (Check === "true") {
            setUser(data)
        }
        else {
            navigate('/');
        }
    }, [navigate]);
    return (
        <div>
            {user ?
                <Layout>

                    <div className="side">
                        <BannerHeader user={user} />
                        <div className="section">
                            <Card />
                            <News />
                        </div>
                    </div>
                </Layout>
                : <Loader />
            }
        </div>
    )
}

export default Dashboard