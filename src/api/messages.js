const cohort = "2303-FTB-MT-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${cohort}`;

export const postMessage = async (id, token, content) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/${id}/messages`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content,
                }
            })
        });

        const result = await response.json();
    } catch (error) {
        console.error(error)

    }
}