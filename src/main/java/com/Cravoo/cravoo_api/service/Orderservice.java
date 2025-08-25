package com.Cravoo.cravoo_api.service;

import com.Cravoo.cravoo_api.io.OrderRequest;
import com.Cravoo.cravoo_api.io.OrderResponse;
import com.razorpay.RazorpayException;

import java.util.List;
import java.util.Map;

public interface Orderservice {

    OrderResponse createOrderWithPayment(OrderRequest request) throws RazorpayException;

    void verifyPayment (Map<String, String> paymentData, String status);

    List<OrderResponse> getUserOrders();

    void removeOrder(String OrderId);

    List<OrderResponse> getOrdersOfAllUsers();

    void updateOrderStatus(String orderId, String staus);
}
