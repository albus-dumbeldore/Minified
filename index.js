const minify = require('minify');
const fs     = require('fs')
const options = {
    html: {
        removeComments:true,
        removeAttributeQuotes: false,
        removeOptionalTags: false,
        collapseWhitespace: true
    },
};
 
minify('./index.html', options)
    .then(result=>{
        fs.writeFile('output.html',result,(err)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log('file make')
            }
        })
    })
    .catch(console.error);