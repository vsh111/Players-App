package com.vsh.Players.controller;

import java.util.List;
import java.util.Optional;

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

import com.vsh.Players.model.Players;
import com.vsh.Players.repository.PlayerRepository;

@RestController @CrossOrigin(origins = "http://localhost:4200")
public class PlayerController {
	
	@Autowired
    private PlayerRepository playerRepository;

    @GetMapping("/players")
    private Iterable<Players> view() {
		return playerRepository.findAll();
	}
    
    @GetMapping("/players/{id}")
	private Optional<Players> viewById(@PathVariable Integer id) {
		return playerRepository.findById(id);
	}

    @PostMapping("/players")
	private Players create(@RequestBody Players players) {
		return playerRepository.save(players);
	}
    
    @PutMapping("/players/{id}")
	private Players update(@PathVariable Integer id, @RequestBody Players players) {
		return playerRepository.save(players);
	}
	
	@DeleteMapping("/players/{id}")
	private void delete(@PathVariable Integer id) {
		playerRepository.deleteById(id);
	}



}
