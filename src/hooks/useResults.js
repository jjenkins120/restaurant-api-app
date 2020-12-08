import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

//this code only has to do with the API logic, so its good practice to cut it from its original component (searchscreen) and add it here

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                //params are the query parameters appended at the end of /search above
                    params: {
                        limit: 50,
                        term: searchTerm, 
                        // term: term, 
                        location: 'chicago'
                    }
            })
            setResults(response.data.businesses)
        } catch (err) {
            //try-catch is good to use for errors 
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, [])
    //useEffect allows us to run code a certain number of times when the component is rendered
    //useEffect has two arguments - the function called upon rendering and the number of times it will run (housed in an array). Syntactically, if the array is empty, the function will run only once

    return [searchApi, results, errorMessage]
    //because we need to use searchApi, results, & errorMessage in our SearchScreen component, we return them here in an array to be able to be accessed in Searchscreen  
}