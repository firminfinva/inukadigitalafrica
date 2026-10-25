CREATE TABLE IF NOT EXISTS testimonials (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name text NOT NULL,
  role_fr text NOT NULL,
  role_en text NOT NULL,
  quote_fr text NOT NULL,
  quote_en text NOT NULL,
  rating smallint NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  is_published boolean NOT NULL DEFAULT false,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS testimonials_published_order_idx
  ON testimonials (display_order, id)
  WHERE is_published = true;