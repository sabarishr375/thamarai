-- =============================================
-- Thamarai Industries - PostgreSQL Schema
-- Run this in Supabase SQL Editor
-- =============================================

-- Services table
CREATE TABLE IF NOT EXISTS services (
    id          BIGSERIAL PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url   VARCHAR(500)
);

-- Gallery table
CREATE TABLE IF NOT EXISTS gallery (
    id        BIGSERIAL PRIMARY KEY,
    image_url VARCHAR(500) NOT NULL
);

-- Contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id        BIGSERIAL PRIMARY KEY,
    name      VARCHAR(255) NOT NULL,
    phone     VARCHAR(20) NOT NULL,
    message   TEXT NOT NULL
);

-- =============================================
-- Seed default services (optional)
-- =============================================
INSERT INTO services (name, description) VALUES
  ('Arc Welding', 'High-strength arc welding for structural and industrial applications.'),
  ('MIG Welding', 'Metal Inert Gas welding for clean, precise welds on thin to medium metals.'),
  ('TIG Welding', 'Tungsten Inert Gas welding for high-precision welds on stainless steel.'),
  ('Metal Fabrication', 'Custom metal fabrication — cutting, bending, and assembling structures.'),
  ('Gate & Grill Works', 'Decorative and security gates, window grills, and railings.'),
  ('Roof Works', 'Metal roofing structures and industrial roofing solutions.')
ON CONFLICT DO NOTHING;
