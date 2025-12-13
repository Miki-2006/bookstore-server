import supabase from '../config/supabase.js'

export const getAllBooks = async (req, res) => {

    try {
        const {data, error} = await supabase.from('book').select('*')
        if (data) {
            res.send(data)
            
        } else {
            console.error(error);
        }
    } catch (e) {
        console.error(`Error in fetching all books: ${e}`);
    }
}