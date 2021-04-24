const newsRoute = require('express').Router()
const axios = require('axios')

newsRoute.get('', async(req,res)=>{
    try {
        const newsApi = await axios.get('https://raddy.co.uk/wp-json/wp/v2/posts/')
        res.render('news',{ articales : newsApi.data })
        
    } catch (err) {
        if(err.response){
            res.render('news',{ articales : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.requiest){
            res.render('news',{ articales : null })
            console.log(err.requiest)
        }else{
            res.render('news',{ articales : null })
            console.error('Error',err.message)
        }
    }

})

newsRoute.get('/:id', async(req,res)=>{
    let newsId = req.params.id
    try {

        const newsApi = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${newsId}`)
        res.render('SingleNews',{ articale : newsApi.data })

        
    } catch (err) {
        if(err.response){
            res.render('SingleNews',{ articale : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.request){
            res.render('SingleNews',{ articale : null })
            console.log(err.request)
        }else{
            res.render('SingleNews',{ articale : null })
            console.error('Error',err.message)
        }
    }

})

newsRoute.post('', async(req,res)=>{
    let search = req.body.search
    try {

        const newsApi = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
        res.render('newsSearch',{ articales : newsApi.data })

        
    } catch (err) {
        if(err.response){
            res.render('newsSearch',{ articales : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.request){
            res.render('newsSearch',{ articales : null })
            console.log(err.request)
        }else{
            res.render('newsSearch',{ articales : null })
            console.error('Error',err.message)
        }
    }

})

module.exports = newsRoute