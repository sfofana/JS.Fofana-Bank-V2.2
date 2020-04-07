package com.app;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.app.data.AccountData;
import com.app.data.UserData;
import com.app.model.Account;
import com.app.model.User;
import com.app.service.UserService;

@SpringBootTest
@RunWith(SpringRunner.class)
class ApplicationTests {

	@Autowired
	UserService userService;
	
	@MockBean
	UserData userData;
	@MockBean
	AccountData accountdata;
	
	// Service Tests
	@Test
	public void getUsersTest() {
		List<User> users = new ArrayList<>();
		User u1 = new User(1, "User","Test","test@gmail.com","password",null);	
		User u2 = new User(2, "User2","Test2","test@gmail.com","password",null);	
//		Account a1 = new Account(1001,"saving",1010,u1);
//		Account a2 = new Account(1002,"checking",1010,u1);
//		Account a3 = new Account(1003,"saving",1010,u2);
//		Account a4 = new Account(1004,"checking",1010,u2);
		users.add(u1);
		users.add(u2);
		when(userData.findAll()).thenReturn(users);
		assertEquals(users, userService.getUsers());
	}

}
