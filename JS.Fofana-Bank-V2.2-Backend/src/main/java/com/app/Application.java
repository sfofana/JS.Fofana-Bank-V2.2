package com.app;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.app.data.CheckingData;
import com.app.data.SavingData;
import com.app.data.UserData;
import com.app.model.Checking;
import com.app.model.Saving;
import com.app.model.User;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public CommandLineRunner fillerData(
				UserData userData,
				CheckingData checkingData,
				SavingData savingData
			) {
		return args -> {
			
			Checking c1 = new Checking();
			c1.setId(1);
			c1.setName("checking");
			c1.setAmount(65034);
			checkingData.save(c1);
			
			Checking c2 = new Checking();
			c2.setId(2);
			c2.setName("checking");
			c2.setAmount(1111111);
			checkingData.save(c2);
			
			Saving s1 = new Saving();
			s1.setId(1);
			s1.setName("saving");
			s1.setAmount(235604);
			savingData.save(s1);
			
			Saving s2 = new Saving();
			s2.setId(2);
			s2.setName("saving");
			s2.setAmount(1111111);
			savingData.save(s2);
			
			User u1 = new User();
			u1.setId(1);
			u1.setEmail("master@gmail.com");
			u1.setPassword("demo");
			u1.setFirstname("Amir");
			u1.setLastname("Kamara");
			u1.setChecking(c1);
			u1.setSaving(s1);
			userData.save(u1);
			
			User u2 = new User();
			u2.setId(2);
			u2.setEmail("system@gmail.com");
			u2.setPassword("admin");
			u2.setFirstname("System");
			u2.setLastname("Admin");
			u2.setChecking(c2);
			u2.setSaving(s2);
			userData.save(u2);
		};
	}
}
