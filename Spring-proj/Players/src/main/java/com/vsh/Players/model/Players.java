package com.vsh.Players.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "players")
public class Players {

	@Id
	private int id;
	
    private String firstName;
    private String lastName;
    
    public Players() {
    	  
    }
 
    public Players(String firstName, String lastName) {
    	this.firstName = firstName;
        this.lastName = lastName;
    }
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
 
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    @Override
    public String toString() {
        return "Players [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + "]";
    }
	
}
