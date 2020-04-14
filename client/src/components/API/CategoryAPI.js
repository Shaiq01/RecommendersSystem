import axios from 'axios'

export const getList = () => {
    return axios
        .get('/api/categories', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addItem = category => {
    return axios
        .post(
            '/api/categories',
            {
                categoryname: category.categoryname
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}

export const deleteItem = id => {
    axios
        .delete(`/api/categories/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
}

export const updateItem = (categoryname, id) => {
    return axios
        .put(
            `/api/categories/${id}`,
            {
                categoryname: categoryname
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}