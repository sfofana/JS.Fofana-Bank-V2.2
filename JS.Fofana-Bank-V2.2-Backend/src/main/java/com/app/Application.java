package com.app;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.app.data.AccountData;
import com.app.data.UserData;
import com.app.model.Account;
import com.app.model.User;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public CommandLineRunner fillerData(
				UserData userData,
				AccountData accountData
			) {
		return args -> {
			
			User u1 = new User(
					1, 
					"Amir",
					"Kamara",
					"master@gmail.com",
					"demo",
					null
					);				
			userData.save(u1);
			
			User u2 = new User(
					2, 
					"Systyem",
					"Admin",
					"system@gmail.com",
					"admin",
					null
					);	
			userData.save(u2);
			
			Account a1 = new Account(
					1001,
					"saving",
					321151,
					u1
					);
			accountData.save(a1);
			
			Account a2 = new Account(
					1002,
					"checking",
					4161.25,
					u1
					);
			accountData.save(a2);
			
			Account a3 = new Account(
					1003,
					"saving",
					63624.55,
					u1
					);
			accountData.save(a3);	
			
			Account a4 = new Account(
					1004,
					"checking",
					95447.15,
					u1
					);
			accountData.save(a4);
			
			Account a5 = new Account(
					1005,
					"checking",
					7161.23,
					u2
					);
			accountData.save(a5);
			
			Account a6 = new Account(
					1006,
					"saving",
					366545.14,
					u2
					);
			accountData.save(a6);
		};
	}
}
