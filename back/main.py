from typing import Union
import sqlalchemy
from fastapi import FastAPI


app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/profile/{id}")
async def read_item(id: str, q: Union[str, None] = None):
    return {"user_id": id, "q": q}