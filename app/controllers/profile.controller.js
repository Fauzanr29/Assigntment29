const models = require('../../models/index');

function insertProfile(req, res){
    let form = req.body
    models.Profile.create(form)
    return res.send({ message: 'Data has been created', data: form })
}

async function listProfile(req, res) {
    const result = await models.Profile.findAll();
    if(result.length < 1){
        return res.status(204).send({message: 'Data is Empty'})
    }
    return res.send({ message: 'Data is found', data: result })
}

async function detailProfile(req, res){
    const result = await models.Profile.findOne({ where: { id: req.params.id } })
    if (!result) {
        return res.status(204).send({ message: 'Data is empty' })
    }
    return res.send({ message: 'Data is found', data: result })
}

function updateProfile(req, res){
    let data = req.body
    models.Profile.update(data, { where: { id: req.params.id } })
    
    return res.send({ message: 'Data has been updated', data: req.body })
}

function deleteProfile(req, res){
    models.Profile.destroy({ where: { id: req.params.id } })
    return res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertProfile, 
    listProfile, 
    detailProfile,
    updateProfile, 
    deleteProfile
}
