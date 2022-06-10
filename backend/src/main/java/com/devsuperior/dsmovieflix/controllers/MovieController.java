package com.devsuperior.dsmovieflix.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovieflix.dto.MovieCardDTO;
import com.devsuperior.dsmovieflix.dto.MovieDetailsDTO;
import com.devsuperior.dsmovieflix.dto.ReviewDTO;
import com.devsuperior.dsmovieflix.services.MovieService;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {
	
	@Autowired
	private MovieService service;

	@GetMapping(value = "/{id}")
	public ResponseEntity<MovieDetailsDTO> findById(@PathVariable Long id) {
		MovieDetailsDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
	
	@GetMapping
	public ResponseEntity<Page<MovieCardDTO>> findByGenre(
			@RequestParam(value = "genreId", defaultValue = "0") Long genreId,
			@PageableDefault(sort = {"title"}) Pageable pageable) {
		Page<MovieCardDTO> page = service.findByGenre(genreId, pageable);
		return ResponseEntity.ok(page);
	}
	
	@GetMapping(value = "/{id}/reviews")
	public ResponseEntity<List<ReviewDTO>> findMovieReviews(@PathVariable Long id) {
		List<ReviewDTO> dto = service.findMovieReviews(id);
		return ResponseEntity.ok(dto);
	}

}
