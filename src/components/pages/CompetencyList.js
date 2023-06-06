import React from 'react'
import './Competency.css'
import Competency from './Competency'

function CompetencyList() {
    return (
        <>
            <h1 className='heading'>Competencies</h1>
            <div className='placeorder-container'>
                <div className='cards'>
                    <div className='cards__container'>
                        <div className='cards__wrapper'>
                            <ul className='cards__items'>
                                <Competency
                                    src='images/Analytics.jpg'
                                    text='Advance Analytics'
                                    path='/Stat'
                                />
                                <Competency
                                    src='images/appdevelopment.jpg'
                                    text='Application Development'
                                    path='/Appdev'
                                />
                                <Competency
                                    src='images/appintegration.jpg'
                                    text='Application Integration'
                                    path='/QualityEngineering'
                                />
                            </ul>
                            <ul className='cards__items'>
                                <Competency
                                    src='images/cloudeng.jpg'
                                    text='Cloud Data Engineering'
                                    path='/AppDev'
                                />
                                <Competency
                                    src='images/cloudplat.jpg'
                                    text='Cloud Data Platform'
                                    path='/AppIntegration'
                                />
                                <Competency
                                    src='images/PMO.jpg'
                                    text='Consulting & Project Management'
                                    path='/QualityEngineering'
                                />
                            </ul>
                            <ul className='cards__items'>
                                <Competency
                                    src='images/datagov.jpg'
                                    text='Data Governance'
                                    path='/AppDev'
                                />
                                <Competency
                                    src='images/datavis.jpg'
                                    text='Data Visualization'
                                    path='/AppIntegration'
                                />
                                <Competency
                                    src='images/EPM.jpg'
                                    text='Enterprise Performance Management (EPM)'
                                    path='/QualityEngineering'
                                />
                            </ul>
                            <ul className='cards__items'>
                                <Competency
                                    src='images/oracle.webp'
                                    text='Oracle'
                                    path='/AppDev'
                                />
                                <Competency
                                    src='images/QE.jpg'
                                    text='Quality Engineering'
                                    path='/AppIntegration'
                                />
                                <Competency
                                    src='images/RPA.jpg'
                                    text='Robotic Process Automation (RPA)'
                                    path='/QualityEngineering'
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompetencyList