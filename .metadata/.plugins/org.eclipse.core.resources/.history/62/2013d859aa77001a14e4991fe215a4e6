package com.app.service;

import java.util.List;

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
		if(userData.findById(user.getId()).get() == null) {
			return userData.findById(user.getId()).get();
		} else {
			throw new BusinessException("user not found");
		}		
	}

	@Override
	public User addUser(User user) throws BusinessException {
		return userData.save(user);
	}

	@Override
	public User updateUser(User user) throws BusinessException {
		accountData.saveAll(user.getAccounts());
		return userData.save(user);
	}

	@Override
	public List<User> getUsers() throws BusinessException {
		// TODO Auto-generated method stub
		return userData.findAll();
	}
// test
	@Override
	public User authentication(User user) throws BusinessException {
		User valid = userData.findByEmail(user.getEmail());
		User response = new User();
		
		if(valid.getEmail().equals(user.getEmail())  && valid.getPassword().equals(user.getPassword())) {
			response = valid;
		}
		return response;
	}

}
