import axios from 'axios'

export const getList = () => {
    return axios
        .get('/api/offers', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addItem = offer => {
    return axios
        .post(
            '/api/offers',
            {

                offertitle: offer.offertitle,
                offerdescription: offer.offerdescription,
                vid: offer.vid
     
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function (response) {
            console.log(response)
        })
}

export const deleteItem = id => {
    axios
        .delete(`/api/offers/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const updateItem = (offertitle,offerdescription,offerid) => {
    return axios
        .put(
            `/api/offers/${offerid}`,
            {   
                offertitle:offertitle,
                offerdescription:offerdescription
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function (response) {
            console.log(response)
        })
}

export const getvendoroffer = (vid) => {
    return axios
        .get(`/api/vendor/offers/${vid}`,
        {
        },
         {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}