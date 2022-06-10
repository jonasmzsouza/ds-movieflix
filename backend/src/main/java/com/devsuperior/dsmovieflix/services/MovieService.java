package com.devsuperior.dsmovieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovieflix.dto.MovieCardDTO;
import com.devsuperior.dsmovieflix.dto.MovieDetailsDTO;
import com.devsuperior.dsmovieflix.entities.Genre;
import com.devsuperior.dsmovieflix.entities.Movie;
import com.devsuperior.dsmovieflix.repositories.GenreRepository;
import com.devsuperior.dsmovieflix.repositories.MovieRepository;
import com.devsuperior.dsmovieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private GenreRepository genreRepository;
	
	@Transactional(readOnly = true)
	public MovieDetailsDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new MovieDetailsDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public Page<MovieCardDTO> findByGenre(Long genreId, Pageable pageable) {
		Genre genre = genreId > 0 ? genreRepository.getOne(genreId) : null;
		Page<Movie> page = repository.findByGenre(genre, pageable);
		return page.map(x -> new MovieCardDTO(x));
	}

}
