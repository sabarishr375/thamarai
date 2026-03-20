package com.thamarai.industries.controller;

import com.thamarai.industries.model.Contact;
import com.thamarai.industries.repository.ContactRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller for contact form submissions.
 */
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactRepository repo;

    public ContactController(ContactRepository repo) {
        this.repo = repo;
    }

    // POST submit contact form
    @PostMapping
    public ResponseEntity<Contact> submit(@Valid @RequestBody Contact contact) {
        Contact saved = repo.save(contact);
        return ResponseEntity.ok(saved);
    }
}
