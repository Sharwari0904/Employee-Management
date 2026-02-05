package com.tka.EmployeeMangement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tka.EmployeeMangement.entity.Employee;

@Repository
public interface EmployeeRepo  extends JpaRepository<Employee, Long>{

	Employee getByEmail(String email);
	
}
