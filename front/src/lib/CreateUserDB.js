const createDBuser = async ({queryKey}) => {
    const userInfo = queryKey[1];

    const {user} = userInfo
    console.log("ABOVE USER IN CREATE DB USER")

    const id = user.sub

    const email = user.email
    console.log(email)
    const name = user.name
    console.log(name)
    const apiRes =  await fetch(`http://localhost:8000/profile/create`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
            id: id
        })
    });

    if(!apiRes.ok) {
        throw new Error(`details ${id} didnt create`)
    }

    //     // expects you to return a promise so you can return it without awaiting. 
    //     // react query expects a promise so don't await it
    return apiRes.json()
}

export default createDBuser