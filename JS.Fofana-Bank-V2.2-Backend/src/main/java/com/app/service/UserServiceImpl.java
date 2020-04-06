package com.app.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.data.AccountData;
import com.app.data.UserData;
import com.app.exception.BusinessException;
import com.app.model.User;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserData userData;
	@Autowired
	private AccountData accountData;
	
	@Override
	public User getUser(User user) throws BusinessException {
		User data = userData.findById(user.getId()).get();
		
		if(data == null) {
			return data;
		} else {
			throw new BusinessException("user not found");
		}		
	}

	@Override
	public User addUser(User user) throws BusinessException {
		User data = userData.findById(user.getId()).get();
		
		if(data == null) {
			return userData.save(user);		
		} else {
			throw new BusinessException("user already exists");
		}	
	}

	@Override
	public User updateUser(User user) throws BusinessException {
		try {	
			// Try if user exists
			userData.findById(user.getId()).get();
			// Business logic
			accountData.saveAll(user.getAccounts());
			return userData.save(user);			
		} catch(NoSuchElementException e) {
			throw new BusinessException("user does not exists");
		}
	}

	@Override
	public List<User> getUsers() throws BusinessException {
		List<User> data = userData.findAll();
		
		if(data == null) {
			throw new BusinessException("no users found");
		} else {
			return data;
		}
		
	}
// test
	@Override
	public User authentication(User user) throws BusinessException {
		User valid = userData.findByEmail(user.getEmail());  
		
		if(valid == null) {
			throw new BusinessException("user not found");
		} else if(
				valid.getEmail().equals(user.getEmail())  
				&& valid.getPassword().equals(user.getPassword())
				) {
			return valid;
		} else {
			throw new BusinessException("user not found");
		}		
	}

}
