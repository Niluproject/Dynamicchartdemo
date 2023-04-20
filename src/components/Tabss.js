import '../App.css';
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Tabss() {
    const investor = {
        name: 'Investors grid',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    };
    const startups = {
        name: 'StartUps grid',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    };

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Investors</Tab>
                    <Tab>StartUps</Tab>
                </TabList>

                <TabPanel>
                    <h2>{investor.name}</h2>
                    <img
                        className="avatar"
                        src={investor.imageUrl}
                        alt={'Photo of ' + investor.name}
                        style={{
                            width: investor.imageSize,
                            height: investor.imageSize
                        }}
                    />
                </TabPanel>
                <TabPanel>
                    <h2>{startups.name}</h2>
                    <img
                        className="avatar"
                        src={startups.imageUrl}
                        alt={'Photo of ' + startups.name}
                        style={{
                            width: startups.imageSize,
                            height: startups.imageSize
                        }}
                    />
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Tabss
