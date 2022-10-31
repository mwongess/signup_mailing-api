-- select all new users in the database
CREATE PROCEDURE selectNew 
AS
SELECT FROM users WHERE isWelcomed = false

-- update user as welcomed
CREATE PROCEDURE setWelcomed
@id VARCHAR(200)
AS
UPDATE users SET isWelcomed = true
WHERE id = @id