package com.app.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Account;

@Repository
public interface AccountData extends JpaRepository<Account, Integer>{

}
