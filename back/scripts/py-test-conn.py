import psycopg2

# PostgreSQL connection details
host = "0.0.0.0"
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
    connection.close()
except psycopg2.Error as e:
    print(f"Error connecting to PostgreSQL: {e}")