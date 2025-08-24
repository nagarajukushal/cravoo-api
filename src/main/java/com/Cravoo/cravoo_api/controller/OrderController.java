package com.Cravoo.cravoo_api.controller;

import com.Cravoo.cravoo_api.io.OrderRequest;
import com.Cravoo.cravoo_api.io.OrderResponse;
import com.Cravoo.cravoo_api.service.Orderservice;
import com.razorpay.RazorpayException;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@AllArgsConstructor
public class OrderController {

    private final Orderservice orderservice;

    @PostMapping("/create")
    public OrderResponse createOrderWithPayment(@RequestBody OrderRequest request) throws RazorpayException {
        OrderResponse response = orderservice.createOrderWithPayment(request);
        return response;
    }

    @GetMapping("/verify")
    public void verifyPayment(@RequestBody Map<String, String> paymentData){
        orderservice.verifyPayment(paymentData, "paid");
    }
}
