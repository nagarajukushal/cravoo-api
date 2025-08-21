package com.Cravoo.cravoo_api.repository;

import com.Cravoo.cravoo_api.entity.CartEntity;
import com.mongodb.client.MongoClient;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends MongoRepository<CartEntity, String> {

    Optional<CartEntity> findByUserId (String UserId);

    void deleteByUserId(String userId);
}
