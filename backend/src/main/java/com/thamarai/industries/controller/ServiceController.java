package com.thamarai.industries.controller;

import com.thamarai.industries.model.Service;
import com.thamarai.industries.repository.ServiceRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST controller for welding services CRUD.
 */
@RestController
@RequestMapping("/api/services")
public class ServiceController {

    private final ServiceRepository repo;

    public ServiceController(ServiceRepository repo) {
        this.repo = repo;
    }

    // GET all services
    @GetMapping
    public List<Service> getAll() {
        return repo.findAll();
    }

    // POST create service
    @PostMapping
    public Service create(@Valid @RequestBody Service service) {
        return repo.save(service);
    }

    // PUT update service
    @PutMapping("/{id}")
    public ResponseEntity<Service> update(@PathVariable Long id, @Valid @RequestBody Service updated) {
        return repo.findById(id).map(existing -> {
            existing.setName(updated.getName());
            existing.setDescription(updated.getDescription());
            existing.setImageUrl(updated.getImageUrl());
            return ResponseEntity.ok(repo.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    // DELETE service
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
