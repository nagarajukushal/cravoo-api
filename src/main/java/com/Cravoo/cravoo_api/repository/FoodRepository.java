package com.Cravoo.cravoo_api.repository;

import com.Cravoo.cravoo_api.entity.FoodEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends MongoRepository<FoodEntity, String> {

}
