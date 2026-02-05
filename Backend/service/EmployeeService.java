package com.tka.EmployeeMangement.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tka.EmployeeManagement.dto.Login;
import com.tka.EmployeeMangement.dao.EmployeeRepo;
import com.tka.EmployeeMangement.entity.Employee;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepo repo;
	
	public String addEmployee(Employee emp) {
		Long id=System.currentTimeMillis();
		emp.setEid(id);
		 repo.save(emp);
		 return "employee saved successfully";
		
	}
	
	public String getSignIn(Login login) {
		Employee dbuser = repo.getByEmail(login.getEmail());
		if(dbuser != null && dbuser.getPassword().equals(login.getPassword())) {
			return "login successful";
		}
		return "failed to login";
	}
	
	public Employee getEmployee(Long id) {
		 Employee emp =repo.findById(id).get();
		 return emp;
	} 
	
	public List<Employee> getAllEmployee(){
		 List<Employee> emplist = repo.findAll();
		 return emplist;
	}
		  
	public String updateEmployee(Employee emp) {
	    Employee existingemp = repo.findById(emp.getEid()).get();
	    if(existingemp == null) {
	    	return "employee not found";
	    }
	    
	    existingemp.setName(emp.getName());
	    existingemp.setEmail(emp.getEmail());
	    existingemp.setPassword(emp.getPassword());
	    existingemp.setDesignation(emp.getDesignation());
	    existingemp.setPhoneNo(emp.getPhoneNo());
	     
	    repo.save(existingemp);
	    return "updated successfully";
		
	}
	
	public String deleteEmployee(Long id) {
		Employee employee = repo.findById(id).get();
		repo.delete(employee);
		return "deleted successfully";
	}

	public Employee getEmpEmail(String email) {
		// TODO Auto-generated method stub
		return repo.getByEmail(email);
		
	}
	
	

}
