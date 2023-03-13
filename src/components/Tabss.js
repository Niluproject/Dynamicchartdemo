import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Tabss() {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Investors</Tab>
                    <Tab>StartUps</Tab>
                </TabList>

                <TabPanel>
                    <h2>Investors grid</h2>
                </TabPanel>
                <TabPanel>
                    <h2>StartUps grid</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Tabss
