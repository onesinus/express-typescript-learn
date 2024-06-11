import axios from 'axios';

export const getToken = async (): Promise<string | undefined> => {
    try {
        const response = await axios.post(
            'https://test.api.amadeus.com/v1/security/oauth2/token',
            new URLSearchParams({
                'grant_type': 'client_credentials',
                'client_id': process.env.AMADEUS_API_Key ?? '',
                'client_secret': process.env.AMADEUS_API_Secret ?? ''
            }).toString(),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
        console.log('Token:', response.data.access_token); // remove this later
        return response.data.access_token
        // return "harcoded token here"
    } catch (error) {
        console.error('Error:', error);
    }
};

export const getDestinations = async (token: string | undefined): Promise<string | undefined> => {
    try {
        if (token) {
            const response = await axios.get(
                'https://test.api.amadeus.com/v1/shopping/flight-destinations',
                {
                    params: {
                        origin: 'PAR',
                        maxPrice: 200
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }
            );
            return response.data;
        }
        return "UnAuthorized"
    } catch (error) {
        console.error('Error:', error);
        return `Error: ${error}`
    }
};