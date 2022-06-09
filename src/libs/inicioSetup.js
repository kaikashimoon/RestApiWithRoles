import Role from '../models/Role'

export const createRoles = async () =>{

    const count = await Role.estimatedDocumentCount()

    if(count > 0) {
        return
    } else {

       const values = await Promise.all([
        newRole({name: 'user'}).save(),
        newRole({name: 'moderator'}).save(),
        newRole({name: 'admin'}).save()
       ]) 
    }
}