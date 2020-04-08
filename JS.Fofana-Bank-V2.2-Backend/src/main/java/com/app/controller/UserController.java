package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.User;
import com.app.service.UserService;

@RestController
@CrossOrigin()
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/connection")
	public String connection(){
		// endpoint to verify if server is running
		return userService.connected();
	}
	
	@PostMapping("/user")
	public User authenticstion(@RequestBody User user) {
		return userService.authentication(user);
	}
	
	@PutMapping("/user")
	public User transaction(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
	@GetMapping("/user")
	public List<User> test(){
		return userService.getUsers();
	}
}
