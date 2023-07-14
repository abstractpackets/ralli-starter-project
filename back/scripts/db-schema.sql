-- forcefully drop our tables if they already exist
DROP TABLE IF EXISTS public.users cascade;
DROP TABLE IF EXISTS public.messages;
DROP TABLE IF EXISTS public.timeline;
DROP TABLE IF EXISTS public.status;

CREATE TABLE public.users (
  uuid UUID default  gen_random_uuid () primary key,
  first_name text NOT NULL,
  screenname text NOT NULL,
  email text NOT NULL,
  cognito text NOT NULL,
  created_at timestamp default current_timestamp NOT NULL
);

CREATE TABLE public.messages (
  uuid UUID DEFAULT  gen_random_uuid () PRIMARY KEY,
  user_uuid UUID REFERENCES public.users(uuid) NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  expires_at TIMESTAMP,
  created_at TIMESTAMP default current_timestamp NOT NULL
);

CREATE TABLE public.timeline (
    uuid UUID DEFAULT gen_random_uuid () PRIMARY KEY,
    user_uuid UUID REFERENCES public.users(uuid) NOT NULL,
    message text NOT NULL,
    expires_at TIMESTAMP,
    created_at TIMESTAMP default current_timestamp NOT NULL
);

CREATE TABLE public.status (
    uuid UUID DEFAULT gen_random_uuid () PRIMARY KEY,
    user_uuid UUID REFERENCES public.users(uuid) NOT NULL,
    message text NOT NULL,
    expires_at TIMESTAMP,
    created_at TIMESTAMP default current_timestamp NOT NULL
);