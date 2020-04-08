package com.app;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.platform.commons.util.ClassFilter;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.app.controller.UserController;
import com.app.data.AccountData;
import com.app.data.UserData;
import com.app.exception.ErrorMessage;
import com.app.model.Account;
import com.app.model.User;
import com.app.service.UserService;

@SpringBootTest
@RunWith(SpringRunner.class)
//@WebMvcTest(value = UserController.class)
//@ContextConfiguration(classes = {TestContext.class, WebAppContext.class})
//@WebAppConfiguration
//@DataJpaTest
class ApplicationTests {

	private MockMvc mockMvc;
	
	@Autowired
	UserController userController;
	@Autowired
	UserService userService;
	@Autowired
	UserData userData;
	@Autowired
	AccountData accountData;
	
	@MockBean
	UserData mockUserData;
	@MockBean
	AccountData mockAccountdata;
	
	User user = new User(1, "User","Test","test@gmail.com","password",null);
	Account account = new Account(1, "checking", 1010.10, null);
	ErrorMessage errorMessage = new ErrorMessage("testMessage", "testDetails");
	
	// Component Tests
	
	// Controller Tests
	
//	@Test
//	public void connectionTest() throws Exception {
//		String test = "test";
//		
//		RequestBuilder requestBuilder = MockMvcRequestBuilders
//                .get("/connection").accept(MediaType.APPLICATION_JSON);
//		Mockito.when(userServiceb.connected()).thenReturn(test);
//		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
//		JSONAssert.assertEquals(test, result.getResponse().getContentAsString(), false);
//	
//	}
	
//	@Test
//	public void authenticationControllerTest() {
//		User user = new User(1, "User","Test","test@gmail.com","password",null);
//		
//		RequestBuilder requestBuilder = MockMvcRequestBuilders
//                .get("/user/Emp1/project/Project1");
//		MvcResult result;
//		try {
//			result = mockMvc.perform(requestBuilder).andReturn();
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//         
//        when(userService.authentication(user)).thenReturn(user);
//		assertEquals(user.toString(), result.getResponse().toString());
//	}
	
	// Exception Tests
	
	 @Test
		public void errorMessageTest() {			
			assertEquals("testMessage", errorMessage.getMessage());
		}
	 
	 @Test
		public void errorMessageDetailsTest() {			
			assertEquals("testDetails", errorMessage.getDetails());
		}
	
	// Model Tests
	 
	 @Test
		public void userIdTest() {			
			assertEquals(1, user.getId());
		}
	 
	 @Test
		public void userFirstnameTest() {			
			assertEquals("User", user.getFirstname());
		}
	 
	 @Test
		public void userLastnameTest() {			
			assertEquals("Test", user.getLastname());
		}
	 
	 @Test
		public void userEmailTest() {			
			assertEquals("test@gmail.com", user.getEmail());
		}
	 
	 @Test
		public void userPasswordTest() {			
			assertEquals("password", user.getPassword());
		}
	 
	 @Test
		public void userAccountsTest() {			
			assertEquals(null, user.getAccounts());
		}
	 
	 @Test
		public void accountIdTest() {			
			assertEquals(1, account.getId());
		}
	 
	 @Test
		public void accountNameTest() {			
			assertEquals("checking", account.getName());
		}
	 
	 @Test
		public void accountAmountTest() {			
			assertEquals("1010.10", account.getAmount());
		}
	
	 @Test
		public void accountUserTest() {			
			assertEquals(null, account.getUser());
		}
	 
	// Repository Tests
	 
	 @Test
		public void userRepoTest() {
			User user = new User(1, "User","Test","test@gmail.com","password",null);	
		
			userData.save(user);
			assertNotNull(userData.findById(user.getId()));
		}
	 
	 @Test
		public void userRepoByEmailTest() {
			User user = new User(1, "User","Test","test@gmail.com","password",null);	
		
			userData.save(user);
			assertNotNull(userData.findByEmail(user.getEmail()));
		}
	 
	 @Test
		public void accountRepoTest() {
			Account account = new Account(1, "test", 1010, null);	
		
			accountData.save(account);
			assertNotNull(accountData.findById(account.getId()));
		}
	
	// Service Tests
	
	@Test
	public void getUserTest() {
		User user = new User(1, "User","Test","test@gmail.com","password",null);	
	
		when(mockUserData.findById(user.getId()).get()).thenReturn(user);
		//when(userService.getUser(user)).thenReturn(user);
		assertEquals(user, userService.getUser(user));
	}
	
	@Test
	public void authenticationTest() {
		User user = new User(1, "User","Test","test@gmail.com","password",null);	
	
		when(mockUserData.findByEmail(user.getEmail())).thenReturn(user);
		assertEquals(user, userService.authentication(user));
	}
	
	@Test
	public void addUserTest() {
		User user = new User(1, "User","Test","test@gmail.com","password",null);	
	
		when(mockUserData.save(user)).thenReturn(user);
		assertEquals(user, userService.addUser(user));
	}
	
	@Test
	public void updateUserTest() {
		User user = new User(1, "User","Test","test@gmail.com","password",null);
		//Account account = 
	
		when(mockUserData.save(user)).thenReturn(user);
		assertEquals(user, userService.updateUser(user));
	}
	
	@Test
	public void getUsersTest() {
		List<User> users = new ArrayList<>();
		User u1 = new User(1, "User","Test","test@gmail.com","password",null);	
		User u2 = new User(2, "User2","Test2","test@gmail.com","password",null);
		users.add(u1);
		users.add(u2);
		when(mockUserData.findAll()).thenReturn(users);
		assertEquals(users, userService.getUsers());
	}

}
