package com.devsuperior.dsmovieflix.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovieflix.dto.UserDTO;
import com.devsuperior.dsmovieflix.entities.User;
import com.devsuperior.dsmovieflix.services.AuthService;

@RestController
@RequestMapping(value = "/users")
public class UserController {
	
	@Autowired
	private AuthService authService;
	
	@GetMapping(value = "/profile")
	public ResponseEntity<UserDTO> getProfile() {
		User user = authService.authenticated();
		return ResponseEntity.ok().body(new UserDTO(user));
	}

}
