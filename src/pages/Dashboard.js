import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import News from '../components/News'
import Layout from '../components/Layout'

function Dashboard() {
    return (
        <div>
            <Layout>
                <div className="side">
                    <Banner />
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