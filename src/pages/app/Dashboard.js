import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import News from '../../components/News'
import Layout from '../../components/Layout'
import BannerHeader from '../../components/BannerHeader'
import Loader from '../../components/Loader'

function Dashboard() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (data) {
            setUser(data)
        }
    }, []);
    
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