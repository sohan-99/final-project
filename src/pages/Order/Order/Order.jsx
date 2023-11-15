import { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg'
import MenuCover from '../../Share/MenuCover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';

import OrderTabs from '../OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessertsn', 'offered'];
    const {category} = useParams();
    const initialIndx = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndx);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <MenuCover img={orderImg} title={'Order Food'}></MenuCover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                  <OrderTabs items={salad}></OrderTabs>
                </TabPanel>
                <TabPanel>
                <OrderTabs items={pizza}></OrderTabs>
                </TabPanel>
                <TabPanel>
                <OrderTabs items={soup}></OrderTabs>
                </TabPanel>
                <TabPanel>
                <OrderTabs items={desserts}></OrderTabs>
                </TabPanel>
                <TabPanel>
                <OrderTabs items={offered}></OrderTabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;