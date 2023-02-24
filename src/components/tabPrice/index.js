import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Chart from '../chart';

function TabPrice() {
  return (
    <Tabs
      defaultActiveKey="buy"
      className="mb-4"
      justify
    >
      <Tab eventKey="buy" title="Harga Beli">
        <Chart />
      </Tab>
      <Tab eventKey="sell" title="Harga Jual">
        <Chart />
      </Tab>
    </Tabs>
  );
}

export default TabPrice;