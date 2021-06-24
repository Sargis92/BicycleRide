const { StatusCodes } = require('http-status-codes');


class ResponseHandlerUtil {
  /**
   * @param {Object} res
   * @param {Object} data
   */
  static handleGet(res, data) {
    return res.status(StatusCodes.OK).json({ data });
  }

  /**
   * @param {Object} res
   * @param {Object} data
   * @param {number} [total]
   */
  static handleList(res, data, total) {
    return res.status(StatusCodes.OK).json({total, data });
  }


  /**
   * @param {Object} res
   * @param {Object} data 
   */
  static handleNotFoundError(res, data) {
    return res.status(404).json({ message: data })
  }


}

module.exports = ResponseHandlerUtil;
