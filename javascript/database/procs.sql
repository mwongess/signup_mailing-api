-- select all new users in the database
CREATE PROCEDURE selectNew 
AS
BEGIN
SELECT FROM users WHERE isWelcomed = false
END

-- update user as welcomed
CREATE PROCEDURE setWelcomed
@id VARCHAR(200)
AS
BEGIN
UPDATE users SET isWelcomed = true
WHERE id = @id
END