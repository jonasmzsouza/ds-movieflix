package com.devsuperior.dsmovieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovieflix.dto.ReviewDTO;
import com.devsuperior.dsmovieflix.entities.Movie;
import com.devsuperior.dsmovieflix.entities.Review;
import com.devsuperior.dsmovieflix.entities.User;
import com.devsuperior.dsmovieflix.repositories.MovieRepository;
import com.devsuperior.dsmovieflix.repositories.ReviewRepository;

@Service
public class ReviewService {
	
	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private AuthService authService;
	
	
	@Transactional
	public ReviewDTO save(ReviewDTO dto) {
		Review entity = copyDtoToEntity(dto);
		entity = repository.save(entity);
		return new ReviewDTO(entity);
	}
	
	private Review copyDtoToEntity(ReviewDTO dto) {
		User user = authService.authenticated();
		
		Movie movie = movieRepository.getOne(dto.getMovieId());
		
		Review entity = new Review();
		entity.setText(dto.getText());
		entity.setMovie(movie);
		entity.setUser(user);

		return entity;
	}

}
