package com.devsuperior.dsmovieflix.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.devsuperior.dsmovieflix.dto.ReviewDTO;
import com.devsuperior.dsmovieflix.entities.Genre;
import com.devsuperior.dsmovieflix.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
	
	@Query("SELECT obj FROM Movie obj WHERE "
	        + ":genre IS NULL OR obj.genre = :genre")
	Page<Movie> findByGenre(Genre genre, Pageable pageable);

	@Query("SELECT new com.devsuperior.dsmovieflix.dto.ReviewDTO(obj) "
			+ "FROM Review obj WHERE obj.movie = :movie")
	List<ReviewDTO> findMovieReviews(Movie movie);
	
}
