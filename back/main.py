from typing import Union
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from fastapi import FastAPI
from db.db import db_get_profile
from db.db import db_post_profile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class Item(BaseModel):
    name: str
    email: str
    id: str

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:80",
    "http://localhost:8000",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/profile/create")
async def create_profile(item: Item):
    print(item)
    db_post_profile(item.id, item.name, item.email)
    return item
    
    # user_info = db_post_profile(id, user.name, user.email)
    # print(user_info)

 
 


@app.get("/profile/{id}")
async def get_profile(id: str):
    print(id)
    user_info = db_get_profile("f")
    print(user_info)
    first_name = user_info[0]
    print(first_name)
    email = user_info[1]
    return {"name": first_name, "email": email}
 


