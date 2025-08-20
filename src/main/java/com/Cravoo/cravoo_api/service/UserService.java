package com.Cravoo.cravoo_api.service;

import com.Cravoo.cravoo_api.io.UserRequest;
import com.Cravoo.cravoo_api.io.UserResponse;

public interface UserService {
    UserResponse registerUser(UserRequest request);
}
