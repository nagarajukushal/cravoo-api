package com.Cravoo.cravoo_api.controller;

import com.Cravoo.cravoo_api.io.AuthenticationRequest;
import com.Cravoo.cravoo_api.io.AuthenticationResponse;
import com.Cravoo.cravoo_api.service.AppUserDetailsService;
import com.Cravoo.cravoo_api.util.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final AppUserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;

    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody AuthenticationRequest request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        final UserDetails userDetails= userDetailsService.loadUserByUsername(request.getEmail());
        final String jwtToken = jwtUtil.generateToken(userDetails);

        return new AuthenticationResponse(request.getEmail(), jwtToken);
    }
}
