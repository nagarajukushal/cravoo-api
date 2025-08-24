package com.Cravoo.cravoo_api.io;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OrderItem {

    private String FoodId;
    private int quantity;
    private double price;
    private String category;
    private String ImageUrl;
    private String description;
    private String name;
}
