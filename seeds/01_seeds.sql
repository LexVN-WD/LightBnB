INSERT INTO users (name, email, password)
VALUES
('John Shepard', 'n7shepard@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Liara TSoni', 'drtsoni@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('David Anderson', 'cptandersonSA@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES
(1, 'Normandy SR-2', 'Commanders Quarters', 'https://i.imgur.com/qq91mkO.png', 'https://i.imgur.com/mwhb0Mp.png', 500000, 1, 1, 1, 'Canada', '97 Alliance Military Hanger Highway', 'Vancouver', 'British Columbia', 'V3H 9V7', true),
(2, 'Nos Astra', 'Penthouse Suite', 'https://i.imgur.com/IezPSFk.jpg', 'https://i.imgur.com/pLG5FsJ.jpg', 2500000, 4, 3, 3, 'Illium', '245-9 Vista Elle Quarter', 'Nos Astra', 'Mesa Gen', 'I1N 2M3', true),
(3, 'Tiberius Towers', 'Tiberius Towers Apartment Suite', 'https://i.imgur.com/6iuyHcl.png', 'https://i.imgur.com/ZS73o7M.png', 1750000, 2, 2, 5, 'Citadel', '165-1 Tiberius Towers Lane', 'Silversun Strip', 'Citadel', 'C2S 9T7', true);

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES
('2007-11-16', '2008-10-04', 1, 1),
('2010-01-26', '2013-02-09', 2, 2),
('2012-03-06', '2017-06-03', 3, 3);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES
(1, 1, 1, 3, 'Fishtank was nice, small bathroom.'),
(2, 2, 2, 1, 'Elevator to reach the floor took forever and the room had blaster marks everywhere.'),
(3, 3, 3, 5, 'Fireplace and wall waterfall kept the ambience, excited to stay again!');