const { StatusCodes } = require('http-status-codes');


class ErrorHandlerUtil {

    /**
     * @param {Object} res
     * @param {Object} data 
     */
    static handleNotFoundError(res, data) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: data });

    } 
}

module.exports = ErrorHandlerUtil;
