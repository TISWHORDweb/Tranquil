import React, { useContext, useEffect, useState } from 'react'
import Card from '../../components/Card'
import News from '../../components/News'
import Layout from '../../components/Layout'
import BannerHeader from '../../components/BannerHeader'
import Loader from '../../components/Loader'
import { MyContext } from '../../context/Context'
import { Check } from '../../Utils/Core'

function Dashboard() {

    const { checkAuth } = useContext(MyContext)
    const [user, setUser] = useState(null)

    useEffect(() => {
        checkAuth();

    }, [checkAuth]);
    const Checks = Check()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (Checks) {
            setUser(data)
        }
    }, [Checks]);
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