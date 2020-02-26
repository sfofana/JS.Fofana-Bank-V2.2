package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.data.UserData;
import com.app.model.User;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserData userData;
	
	@Override
	public User getUser(User user) {
		return userData.findById(user.getId()).get();
	}

	@Override
	public User addUser(User user) {
		return userData.save(user);
	}

	@Override
	public User updateUser(User user) {
		return userData.save(user);
	}

	@Override
	public List<User> getUsers() {
		// TODO Auto-generated method stub
		return userData.findAll();
	}

}
