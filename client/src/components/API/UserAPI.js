import axios from 'axios'

export const studentregister = StudentRegister => {
    return axios
        .post('api/studentregister', StudentRegister, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}
export const studentlogin = student => {
    return axios
        .post('api/studentlogin', {
            email: student.email,
            password: student.password
        }, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
            return response.data.token

        })
        .catch(err => {
            console.log(err)
        })
}
export const studentprofile = async () => {
    try {
        const response = await axios
            .get('api/studentprofile', {
                headers: { Authorization: `Bearer ${localStorage.usertoken}` }
            })
        console.log(response)
        return response.data
    }
    catch (err) {
        console.log(err)
    }
}
export const vendorregister = VendorRegister => {
    return axios
        .post('api/vendorregister', VendorRegister, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}
export const vendorlogin = vendor => {
    return axios
        .post('api/vendorlogin', {
            email : vendor.email,
            password : vendor.password
        }, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            localStorage.setItem('usertoken',response.data.token)
            return response.data.token
            
        })
        .catch(err => {
            console.log(err)
        })
    }
export const vendorprofile = async () => {
        try {
            const response = await axios
                .get('api/vendorprofile', {
                    headers: { Authorization: `Bearer ${localStorage.usertoken}` }
                })
            console.log(response)
            return response.data
        }
        catch (err) {
            console.log(err)
        }}

export const adminregister = AdminRegister => {
    return axios
        .post('api/adminregister', AdminRegister, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}
export const adminlogin = admin => {
    return axios
        .post('api/adminlogin', {
            email: admin.email,
            password: admin.password
        }, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
            return response.data.token

        })
        .catch(err => {
            console.log(err)
        })
}
export const adminprofile = async () => {
    try {
        const response = await axios
            .get('api/adminprofile', {
                headers: { Authorization: `Bearer ${localStorage.usertoken}` }
            })
        console.log(response)
        return response.data
    }
    catch (err) {
        console.log(err)
    }
}

