package com.Cravoo.cravoo_api.controller;

import com.Cravoo.cravoo_api.io.OrderRequest;
import com.Cravoo.cravoo_api.io.OrderResponse;
import com.Cravoo.cravoo_api.service.Orderservice;
import com.razorpay.RazorpayException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@AllArgsConstructor
public class OrderController {

    private final Orderservice orderservice;

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public OrderResponse createOrderWithPayment(@RequestBody OrderRequest request) throws RazorpayException {
        OrderResponse response = orderservice.createOrderWithPayment(request);
        return response;
    }

    @PostMapping("/verify")
    public void verifyPayment(@RequestBody Map<String, String> paymentData){
        orderservice.verifyPayment(paymentData, "paid");
    }

    @GetMapping
    public List<OrderResponse> getOrders(){
        return orderservice.getUserOrders();
    }

    @DeleteMapping("/{orderId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteOrder(@PathVariable String orderId){
        orderservice.removeOrder(orderId);
    }


    //Admin Panel
    @GetMapping("/all")
    public List<OrderResponse> getOrdersOfAllUsers(){
        return orderservice.getOrdersOfAllUsers();
    }

    //Admin Panel
    @PatchMapping("/status/{orderId}")
    public void updateOrderStatus(@PathVariable String orderId, @RequestParam String status){
        orderservice.updateOrderStatus(orderId, status);
    }
}
