

export async function fetchProfileData(user, setProfile){
    const sub = user.sub
    const res = await fetch (`http://localhost:8000/profile/${sub}`)
    const data = await res.json();
    console.log(`from data block`)

    return data
  }