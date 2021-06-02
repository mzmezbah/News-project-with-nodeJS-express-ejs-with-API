const newsRoute = require('express').Router()
const axios = require('axios')

newsRoute.get('', async(req,res)=>{
    try {
        const newsApi = await axios.get('https://raddy.co.uk/wp-json/wp/v2/posts/')
        res.render('news',{ articles : newsApi.data })
        
    } catch (err) {
        if(err.response){
            res.render('news',{ articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.request){
            res.render('news',{ articles : null })
            console.log(err.request)
        }else{
            res.render('news',{ articles : null })
            console.error('Error',err.message)
        }
    }

})

newsRoute.get('/:id', async(req,res)=>{
    let newsId = req.params.id
    try {

        const newsApi = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${newsId}`)
        res.render('SingleNews',{ article : newsApi.data })

        
    } catch (err) {
        if(err.response){
            res.render('SingleNews',{ article : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.request){
            res.render('SingleNews',{ article : null })
            console.log(err.request)
        }else{
            res.render('SingleNews',{ article : null })
            console.error('Error',err.message)
        }
    }

})

newsRoute.post('', async(req,res)=>{
    let search = req.body.search
    try {

        const newsApi = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
        res.render('newsSearch',{ articles : newsApi.data })

        
    } catch (err) {
        if(err.response){
            res.render('newsSearch',{ articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.request){
            res.render('newsSearch',{ articles : null })
            console.log(err.request)
        }else{
            res.render('newsSearch',{ articles : null })
            console.error('Error',err.message)
        }
    }

})

module.exports = newsRoute