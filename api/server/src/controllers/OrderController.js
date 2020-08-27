import Util from './util'

const util = new Util()

class OrderController {
  static async getAllOrders(req, res) {
    util.setSuccess(200, 'Orders retrieved', { id: 1 })
    return util.send(res)
  }
}
export default OrderController