package com.Cravoo.cravoo_api.service;

import com.Cravoo.cravoo_api.entity.UserEntity;
import com.Cravoo.cravoo_api.io.UserRequest;
import com.Cravoo.cravoo_api.io.UserResponse;
import com.Cravoo.cravoo_api.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.apache.catalina.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserResponse registerUser(UserRequest request){
        UserEntity newUser = convertToEntity(request);
        newUser = userRepository.save(newUser);
        return convertToResponse(newUser);
    }

    private UserEntity convertToEntity(UserRequest request){
       return UserEntity.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .name(request.getName())
                .build();
    }

    private UserResponse convertToResponse(UserEntity registeredUser){
        return UserResponse.builder()
                .id(registeredUser.getId())
                .name(registeredUser.getEmail())
                .email(registeredUser.getEmail())
                .build();
    }
}
