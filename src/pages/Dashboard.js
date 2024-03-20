import React from 'react'
import Card from '../components/Card'
import News from '../components/News'
import Layout from '../components/Layout'
import BannerHeader from '../components/BannerHeader'

function Dashboard() {
    return (
        <div>
            <Layout>
                <div className="side">
                    <BannerHeader />
                    <div className="section">
                        <Card />
                        <News />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Dashboard