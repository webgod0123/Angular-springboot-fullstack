package net.guides.springboot2.springboot2jpacrudexample.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.NamedQuery;


@Entity
@Table(name = "employees")

public class Employee {

	private long id;
	private String name;
	private long salary;
	private long dept_id;
	private long experience;
	
	public Employee(String name, long salary, long dept_id, int experience) {
		super();
		this.name = name;
		this.salary = salary;
		this.dept_id = dept_id;
		this.experience = experience;
	}

	
	public Employee() {
		
	}
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", salary=" + salary + ", dept_id=" + dept_id + ", experience="
				+ experience + "]";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getDept_id() {
		return dept_id;
	}

	public void setDept_id(long dept_id) {
		this.dept_id = dept_id;
	}

	public long getExperience() {
		return experience;
	}

	public void setExperience(long l) {
		this.experience = l;
	}

	public long getSalary() {
		return salary;
	}

	public void setSalary(long salary) {
		this.salary = salary;
	}
	
}
