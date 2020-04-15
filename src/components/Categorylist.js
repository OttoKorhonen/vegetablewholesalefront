import React from 'react'

export default function Categorylist(){
    const[categories, setCategories] = React.useState([]);

    React.useEffect(() =>{
        getCategories();
    }, [])

    const getCategories = () =>{
        fetch('https://vegetablewholesale.herokuapp.com/api/categories')
        .then(response => response.json())
        .then(responseData => setCategories(responseData._embedded.categories))
        .catch(err => console.error(err))
    }

    return(
        <div>

        </div>
    )
}