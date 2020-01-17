const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {

  async index(req,res) {
    const devs = await Dev.find();

    return res.json(devs)
  },


  async store(req,res) {
    const { github_username, techs, latitude, longitude } = req.body;
  

    let dev = await Dev.findOne({ github_username});

    if(!dev) {
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    
      let {name , avatar_url, bio = 'dumbass'} = apiResponse.data
    
      bio === null ? (bio = "im a dumbass") : "" ;
    
      const techsArray = parseStringAsArray(techs);
    
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }
    
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      })
    }else {
      console.log("Dev já cadastrado: ", dev.github_username )
    }

    
  
  
  
    return res.json(dev);
  },
  
  async update(req, res){
    const dev = await Dev.findByIdAndUpdate(req.params.id, req.body, {new: true})

    return res.json(dev)

  },
  async destroy(req, res){
    await Dev.findOneAndRemove(req.params.id)

    return res.send()
  }
}