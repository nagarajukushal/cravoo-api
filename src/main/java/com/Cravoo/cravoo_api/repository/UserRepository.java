package com.Cravoo.cravoo_api.repository;

import com.Cravoo.cravoo_api.entity.UserEntity;
import org.apache.catalina.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import software.amazon.awssdk.services.s3.endpoints.internal.Value;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<UserEntity, String> {

    Optional<UserEntity> findByEmail(String email);
}
