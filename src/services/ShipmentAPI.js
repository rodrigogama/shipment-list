import axios from 'axios';

class ShipmentAPI {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:3000/data'
    });
  }

  getShipmentList() {
    return this.axios.get('/shipments.json');
  }

  getShipmentDetails(shipmentId) {
    return this.axios.get(`/shipment-${shipmentId}.json`);
  }
}

export default new ShipmentAPI();
