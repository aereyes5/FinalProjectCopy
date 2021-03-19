import axios from 'axios'

const url = 'http://localhost:3000/'
const purchaseUrl = 'http://localhost:3000/purchases/'

class VisitorServices {
    static login(visitor){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.post(`${url}login`, {visitor});
                const data = res.data
                resolve(data)
            }catch(error) {
                reject(`Invalid Credentials. \nPlease try again`);
            }
        })
    }
    static register(visitor){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.post(`${url}register`, {visitor})
                const data = res.data
                console.log(data)
                resolve(data)
            }catch(error){
                reject(`Unable to register new passenger\n${error}`);
            }
        })
    }

    static account(email){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${url}${email}`)
                const data = res.data
                resolve (data)
            }catch(error){
                reject(`${error}`)
            }
        })
    }

    static update(visitor){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.patch(`${url}${visitor.email}`, {visitor})
                const data = res.data
                resolve (data)
            }catch(error){
                reject(`${error}`)
            }
        })
    }


    static purchase(purchase){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.post(`${purchaseUrl}purchase`, {purchase})
                const data = res.data
                console.log(data)
                resolve(data)
            }catch(error){
                reject(`${error}`);
            }
        })
    }

    static history(email){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${purchaseUrl}${email}`,{email} );
                const data = res.data
                resolve(data)
            }catch(error) {
                reject(`${error}`);
            }
        })
    }

    static cancel(date){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.patch(`${purchaseUrl}${date}`, {date})
                const data = res.data
                resolve (data)
            }catch(error){
                reject(`${error}`)
            }
        })
    }

    static rides(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${url}`)
                const data = res.data
                resolve (data)
            }catch(error){
                reject(`${error}`)
            }
        })
    }

    static delete(email){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.delete(`${url}${email}`, {email})
                const data = res.data
                resolve (data)
            }catch(error){
                reject(`${error}`)
            }
        })
    }

    // static states(){
    //     return new Promise(async (resolve, reject) => {
    //         try{
    //             const res = await axios.get(`${url}states`)
    //             const data = res.data
    //             resolve (data)
    //         }catch(error){
    //             reject(`${error}`)
    //         }
    //     })
    // }


    // static delete(visitor){
    //     return new Promise(async (resolve, reject) =>{
    //         try{
    //             const res = await axios.delete(`${url}${visitor.email}`, {visitor})
    //             const data = res.data
    //             resolve(data)
    //         }catch(error){
    //             reject(`${error}`)
    //         }
    //     })
    // }




    // // static logout(visitor){
    // //     return new Promise(async (resolve, reject) => {
    // //         try{
    // //             const res = await axios.patch(`${url}logout`, {visitor});
    // //             const data = res.data
    // //             resolve(data)
    // //         }catch(error) {
    // //             reject(`Invalid Credentials. \nPlease try again`);
    // //         }
    // //     })  
        
    // }
}

export default VisitorServices;