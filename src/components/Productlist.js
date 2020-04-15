import React from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Addproduct from './Addproduct'
import Editproduct from './Editproduct'

export default function Productlist() {
    const [products, setProducts] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState('');

    React.useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        fetch('https://vegetablewholesale.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err))
    }

    const deleteProduct = (link) => {
        if (window.confirm("Oletko varma?")) {
            fetch(link, { method: 'DELETE' })
                .then(_ => getProducts())
                .then(_ => {
                    setOpen(true);
                    setMsg('Tuote on poistettu')
                })
                .catch(err => console.error(err))
        }
    }

    const addProduct = (product) => {
        fetch('https://vegetablewholesale.herokuapp.com/products',
            {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(product)
            }
                )
            .then(_ => getProducts())
                .then(_ => {
                    setMsg("Uusi tuote lisätty");
                    setOpen(true);
                })
                .catch(err => console.error(err))
    }

    const updateProduct = (link, product) =>{
        fetch(link, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(product),
        }
        )
        .then(_ => getProducts())
        .then(_ =>{
            setMsg('Tuote päivitetty');
            setOpen(true);
        })
        .catch(err => console.error(err))
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const columns = [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Cultivar',
            accessor: 'cultivar'
        },
        {
            Header: 'Description',
            accessor: 'description'
        },
        {
            Header: 'Producer',
            accessor: 'producer'
        },
        {
            Header: 'Country',
            accessor: 'country'
        },
        {
            Header: 'Price(€)',
            accessor: 'price'
        },
        {
            Header: 'Category',
            accessor: 'category.name'
        },
        {
            Cell: row => (<Editproduct product={row.original} updateProduct={updateProduct}/>)
        },
        {
            Cell: row => (<Button color='secondary' size='small' onClick={() => deleteProduct(row.original._links.self.href)}>Delete</Button>)
        }
    ]

    return (
        <div>
            <Addproduct addProduct={addProduct}/>
            
            <ReactTable defaultPageSize={10} filterable={true}
                data={products} columns={columns} />
                <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose} 
                message={msg}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
           />
        </div>
    )
}