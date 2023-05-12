
import { OPENAI_KEY } from '$env/static/private'
import { error } from '@sveltejs/kit';



export async function GET({ url }) {

    const parameterName = url.search.substring(1, url.search.indexOf('='));

    const query = url.searchParams.get(parameterName)

    console.log(query)
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: `Generate a proverb akin to one from "Thing fall apart", try to make it funny, and put a spin on it based on the following keyword(s) : ${query}. \n Here are some examples when given the keyword "gen z" : "Never trust someone who uses 3 in 1 shampoo, body wash, and conditioner"

            "Remember reality when it starts to blur with virtual reality."
            
            "You can tell a good friend by looking at their Instagram. "
            
            "If one’s media lacks followers, one’s worth is deemed hollower."
            
            "Where a thrift store stands, an indie tote bag girl follows."` }],
        })
    };
    let response = await fetch('https://api.openai.com/v1/chat/completions', requestOptions)
    let data = await response.json()

    console.log(data)


    return new Response(
        JSON.stringify({ data })
    );
}