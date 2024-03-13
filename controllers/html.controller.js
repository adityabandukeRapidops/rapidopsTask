const Html = require('../models/htmlCode')
const postHtmlCode = async (req,res)=>{
    try {
        const { code} = req.body;
        // const encodedHtml = Buffer.from(code).toString('base64');
        const newHtml = new Html({
          code ,
          
        });
        await newHtml.save();
        res.status(201).json(newHtml);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

const getHtmlCode = async (req, res) => {
    try {
        const { id } = req.params;
        const htmlData = await Html.findById(id); // Assuming you're using Mongoose
        if (!htmlData) {
            return res.status(404).send('HTML code not found');
        }
        res.status(200).send(htmlData.code); // Send the HTML code as the response
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};



module.exports = {
    postHtmlCode,
    getHtmlCode
}