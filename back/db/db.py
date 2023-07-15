import psycopg2
connection = psycopg2.connect(host='localhost', user='crash',
                              password='password', 
                              dbname='crash', port=5432)
# Open a cursor to perform database operations
cur = connection.cursor()

# Execute a query
cur.execute("SELECT * FROM users")

# Retrieve query results
records = cur.fetchall()
print(records)
# >>> SQL = "INSERT INTO authors (name) VALUES (%s);" # Note: no quotes
# >>> data = ("O'Reilly", )
# >>> cur.execute(SQL, data) # Note: no % operator
# the safe way to pass params in second arg of execute
# SQL = "SELECT * FROM public.users;"
# data = "f"
# cur.execute(SQL)