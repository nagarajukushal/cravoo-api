package com.Cravoo.cravoo_api.service;

import com.Cravoo.cravoo_api.io.FoodRequest;
import com.Cravoo.cravoo_api.io.FoodResponse;
import org.springframework.web.multipart.MultipartFile;

public interface FoodService {

   String uploadFile(MultipartFile file );
   FoodResponse addFood(FoodRequest request, MultipartFile file);
}

