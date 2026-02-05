package com.tka.EmployeeMangement.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
	
	@Id
	private Long eid;
	private String name;
	@Column(unique = true)
	private String email;
	private String password;
	private String designation;
	private String phoneNo;
}
