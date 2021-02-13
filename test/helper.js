const axios = require('axios');

const helper = {

    request: (body) =>

        axios({
            method: 'post',
            url: `http://localhost:${process.env.PORT}/api`,
            data: body
        })

            .then(resp => resp.data)

            .catch(err => err.response.data),

}

module.exports = helper;