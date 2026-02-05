package com.tka.EmployeeMangement.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tka.EmployeeManagement.dto.Login;
import com.tka.EmployeeMangement.entity.Employee;
import com.tka.EmployeeMangement.service.EmployeeService;

@RestController
@RequestMapping("/employee")
@CrossOrigin("*")
public class EmployeeController {
	@Autowired
	EmployeeService service;
	
	@PostMapping("/register")
	public String addEmployee(@RequestBody Employee emp) {
		 return service.addEmployee(emp);
		
	}
	
	@PostMapping("/login")
	public String login(@RequestBody Login login) {
		System.out.println(login);
		String msg = service.getSignIn(login);
		return msg;
	}
	
	@GetMapping("/get/{id}")
	public Employee getEmployee(@PathVariable Long id) {
		 
		 return service.getEmployee(id);
	}
	
	@GetMapping("/email/{email}")
	public Employee getEmpEmail(@PathVariable String email) {
		return service.getEmpEmail(email);
	}
	
	@GetMapping("/emplist")
	public List<Employee> getAllEmployee(){
		 
		 return service.getAllEmployee();
	}
		 
	@PutMapping("/update")
	public String updateEmployee(@RequestBody Employee emp) {
	    
	       return service.updateEmployee(emp);
		}
	
	@DeleteMapping("/remove/{id}")
	public String deleteEmployee(@PathVariable Long  id) {
		
		return service.deleteEmployee(id);
	}
	
	
	

}
