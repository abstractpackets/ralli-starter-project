import psycopg2
import random




def db_get_profile(id):
  try:
    connection = psycopg2.connect(host='localhost', user='crash',
                                password='password', 
                                dbname='crash', port=5432)
    # Open a cursor to perform database operations
    cur = connection.cursor()

    # Execute a query
    # cur.execute("SELECT * FROM users")

    # # Retrieve query results
    # records = cur.fetchall()
    # print(records)
    # >>> SQL = "INSERT INTO authors (name) VALUES (%s);" # Note: no quotes
    # >>> data = ("O'Reilly", )
    # >>> cur.execute(SQL, data) # Note: no % operator
    # the safe way to pass params in second arg of execute
    # SQL = "SELECT * FROM public.users;"
    # data = "f"
    # cur.execute(SQL)

    query = "SELECT first_name, email FROM users WHERE email = 'ryanef39+8@gmail.com';"
    cur.execute(query)

    # Fetch one row returned by the query
    row = cur.fetchone()

    # Check if a row was returned
    if row:
        name, email = row
        print("Name:", name)
        print("Email:", email)
        return row
    else:
        print("No user found.")

    # Close the cursor and connection
    cur.close()
    connection.close()
  except:
     print("fail!")


def db_post_profile(id, name, email):
  try:
    connection = psycopg2.connect(host='localhost', user='crash',
                                password='password', 
                                dbname='crash', port=5432)
    # Open a cursor to perform database operations
    cur = connection.cursor()
    print(id, name, email)
    # Execute a query
    # cur.execute("SELECT * FROM users")

    # # Retrieve query results
    # records = cur.fetchall()
    # print(records)
    # >>> SQL = "INSERT INTO authors (name) VALUES (%s);" # Note: no quotes
    # >>> data = ("O'Reilly", )
    # >>> cur.execute(SQL, data) # Note: no % operator
    # the safe way to pass params in second arg of execute
    # SQL = "SELECT * FROM public.users;"
    # data = "f"
    # cur.execute(SQL)
    screenname = f"{name}+1337"
    # query = "SELECT first_name, email FROM users WHERE email = 'ryanef39+8@gmail.com';"
    query = "INSERT INTO users(first_name, screenname,  email, cognito) VALUES(%s, %s, %s, %s);"
    print(query)
    cur.execute(query, (name, screenname, email, id))
    connection.commit()
    # Close the cursor and connection
    cur.close()
    connection.close()
  except:
     print("fail!")


