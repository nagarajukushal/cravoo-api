package com.Cravoo.cravoo_api.controller;

import com.Cravoo.cravoo_api.io.UserRequest;
import com.Cravoo.cravoo_api.io.UserResponse;
import com.Cravoo.cravoo_api.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse register(@RequestBody UserRequest request){
        return userService.registerUser(request);
    }
}

