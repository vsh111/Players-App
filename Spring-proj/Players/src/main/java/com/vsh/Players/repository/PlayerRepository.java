package com.vsh.Players.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.vsh.Players.model.Players;

public interface PlayerRepository extends MongoRepository<Players, Integer> {

}
