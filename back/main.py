from typing import Union
import sqlalchemy
from fastapi import FastAPI
from db.db import get_profile

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/profile/{email}")
async def read_item(email: str, q: Union[str, None] = None):
    return {"email": email, "q": q}