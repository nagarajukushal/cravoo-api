package com.Cravoo.cravoo_api.service;

import com.Cravoo.cravoo_api.io.CartRequest;
import com.Cravoo.cravoo_api.io.CartResponse;

public interface CartService {
    CartResponse addToCart(CartRequest request);

    CartResponse getCart();

    void clearCart();

    CartResponse removeFromCart (CartRequest cartRequest);
}
