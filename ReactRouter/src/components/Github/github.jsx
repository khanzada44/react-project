import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';

function Github() {
    const data = useLoaderData();

  return (
    <div className="bg-gray-600 text-white p-3 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git-Picture" srcset="" width={300}/>
    </div>
  );
  
}

export default Github;

export const githubInfoLoder = async () =>{
    const response = await fetch('https://api.github.com/users/khanzada44')
    return response.json()
}