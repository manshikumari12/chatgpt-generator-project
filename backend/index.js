const express= require("express")
const cors =require("cors")


const app = express()
app.use(express.json())
app.use(cors())


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey:"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",
});
const openai = new OpenAIApi(configuration);



app.get("/",(req,res)=>{
res.send("wlcom")
})

app.post("/chat" , async(req,res)=>{

    try {
        const {question}=req.body

        const prompt=`write a quote around the word '${question}' in hindi of 5 lines.
        give me the result as follows.

           [hindi result,english result] 

        `
    
       const resp =await openai.createCompletion({
          model:"text-davinci-003",
          prompt,
          max_tokens:400,
          temperature:0,
      })
    //   console.log(resp)
      let data=resp.data.choices[0].text;
    console.log(data);  res.status(200).send({resp:data.trim().split("\n").join("")})  
    } catch (error) {
       console.log(error); 
    }

   
})


app.listen(3000,()=>{
    console.log('server is lsitening on port');
})

