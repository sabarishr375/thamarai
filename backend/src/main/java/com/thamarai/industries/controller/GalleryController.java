package com.thamarai.industries.controller;

import com.thamarai.industries.model.Gallery;
import com.thamarai.industries.repository.GalleryRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST controller for gallery image management.
 */
@RestController
@RequestMapping("/api/gallery")
public class GalleryController {

    private final GalleryRepository repo;

    public GalleryController(GalleryRepository repo) {
        this.repo = repo;
    }

    // GET all gallery images
    @GetMapping
    public List<Gallery> getAll() {
        return repo.findAll();
    }

    // POST add image
    @PostMapping
    public Gallery create(@Valid @RequestBody Gallery gallery) {
        return repo.save(gallery);
    }

    // DELETE image
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
