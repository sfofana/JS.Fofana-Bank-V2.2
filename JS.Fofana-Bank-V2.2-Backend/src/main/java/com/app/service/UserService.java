package com.app.service;

import java.util.List;

import com.app.model.User;

public interface UserService {
	
	public User getUser(User user);
	public User addUser(User user);
	public User updateUser(User user);
	public List<User> getUsers();
}
