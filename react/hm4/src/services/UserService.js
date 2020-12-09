export class UserService{
    url='https://jsonplaceholder.typicode.com/users'
    async getAllUsers(){
        return await fetch(this.url).then(value => value.json())
    }
    async getOneUser(path){
        return await fetch(`https://jsonplaceholder.typicode.com${path}`).then(value => value.json())
    }

}