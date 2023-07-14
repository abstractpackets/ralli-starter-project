import psycopg2

# PostgreSQL connection details
host = "db"
port = 5432
database = "${users}"
user = "${postgres}"
password = "${password}"


# Establish a connection to the PostgreSQL container
try:
    connection = psycopg2.connect(
        host=host,
        port=port,
        database=database,
        user=user,
        password=password
    )
    print("Connection successful!")

    # Create a cursor to execute SQL queries
    cursor = connection.cursor()

    # Execute query to retrieve table names
    cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public'")

    # Fetch all table names
    table_names = cursor.fetchall()
    if not table_names:
        # Create the 'users' table if no tables exist
        cursor.execute("""
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(100),
                email VARCHAR(100)
            )
        """)
        print("Created 'users' table.")
    else:
        # Print the existing table names
        print("Existing tables:")
        for table_name in table_names:
            print(table_name[0])

    # Commit the changes
    connection.commit()

    # Close the cursor and connection
    cursor.close()
    connection.close()
except psycopg2.Error as e:
    print(f"Error connecting to PostgreSQL: {e}")