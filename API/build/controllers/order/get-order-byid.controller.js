"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderByIdController = void 0;
const order_schema_1 = require("../../models/order.schema");
const getOrderByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderID } = req.params;
    try {
        const order = yield order_schema_1.OrderModel.findById(orderID).populate("products.productId");
        if (!order) {
            return res.status(404).json({
                message: "order not found",
            });
        }
        return res.status(200).json({
            order,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal serverrr error",
        });
    }
});
exports.getOrderByIdController = getOrderByIdController;
