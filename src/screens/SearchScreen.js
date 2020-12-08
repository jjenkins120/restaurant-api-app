import React, { useState } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()
    //searchApi, results, errorMessage are essentially being imported from the useResults hooks file

    // originally the useResults logic was here, but because the logic dealt with the API call and not the search functionality, it was moved to the useResults hook file. It is best practice to keep components logic pertaining to their main purpose (don't want them to become bloated)

    const filterResultsByPrice = (price) => {
        //price === '$' or '$$' or '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
            
            <ScrollView>
                <ResultsList title='Cost Effective' results={filterResultsByPrice('$')} />
                <ResultsList title='Bit Pricier' results={filterResultsByPrice('$$')} />
                <ResultsList title='Big Spender' results={filterResultsByPrice('$$$')} />
                <ResultsList title='You Rich' results={filterResultsByPrice('$$$$')} />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    errorStyle: {
        fontWeight: 'bold',
        fontSize: 16, 
        color: 'red'
    },
    // viewStyle: {
    //     flex: 1
    // }
})

export default SearchScreen