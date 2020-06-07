package com.app.service;

import java.util.List;

import com.app.exception.BusinessException;
import com.app.model.User;

public interface UserService {
	
	public String connected() throws BusinessException;
	public User getUser(User user) throws BusinessException;
	public User authentication(User user) throws BusinessException;
	public User addUser(User user) throws BusinessException;
	public User updateUser(User user) throws BusinessException;
	public List<User> getUsers() throws BusinessException;
	public User filterUser(String email) throws BusinessException;
	public Boolean tokenAuthenticated(String token, User user) throws BusinessException;
}
