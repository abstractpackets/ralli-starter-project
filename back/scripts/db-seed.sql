INSERT INTO public.users (first_name, screenname, email, cognito)
VALUES 
('Ryan', 'ryan', 'ryanef39+8@gmail.com', 'MOCK'),
('Sophia', 'sophie23', 'sophia.adams88@gmail.com', 'MOCK'),
('Elijah', 'benji88', 'benjamin.mitchell17@gmail.com', 'MOCK'),
('Ava', 'olive7', 'olivia.roberts42@gmail.com', 'MOCK'),
('Noah', 'jake22', 'jacob.turner95@gmail.com', 'MOCK'),
('Emma', 'miascott', 'mia.scott13@gmail.com', 'MOCK'),
('Liam', 'ethan87', 'ethan.phillips29@gmail.com', 'MOCK'),
('Olivia', 'izzy22', 'isabella.evans84@gmail.com', 'MOCK'),
('Isabella', 'jamesp', 'james.parker62@gmail.com', 'MOCK'),
('Sophia', 'sammy34', 'samantha.reed77@gmail.com', 'MOCK'),
('Jackson', 'willcoops', 'william.cooper21@gmail.com', 'MOCK'),
('Mia', 'nat_hay', 'natalie.hayes55@gmail.com', 'MOCK'),
('Lucas', 'lucas3', 'lucas.miller89@gmail.com', 'MOCK'),
('Avery', 'avery99', 'avery.collins12@gmail.com', 'MOCK'),
('Liam', 'liamk', 'liam.kelly45@gmail.com', 'MOCK');
INSERT INTO public.status (user_uuid, message, expires_at)
VALUES
  (
    (SELECT uuid from public.users WHERE users.screenname = 'ryan' LIMIT 1),
    'This was imported as seed data!',
    current_timestamp + interval '10 day'
  );