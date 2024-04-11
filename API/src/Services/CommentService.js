server.get('/comment', (req, res) =>{
    const queryByUser = `SELECT comment.id, 
	user.username as author,
    comment.comment_text,
    comment.created_at,
    comment.updated_at
 FROM comment
 INNER JOIN user ON comment.userId = user.id
ORDER BY comment.updated_at DESC`
    db.query(queryByUser, (err, result) =>{
        if (err) {
            res.status(500).json({success: false, error: err});
        }
        res.json({success: true, comment:result});
    })
})


//ADICIONAR COMENTARIOS

server.post('/comment', (req, res) =>{
    const {author, comment_text} = req.body;
    db.query('INSERT INTO comment (userId, comment_text) VALUES (?,?)', [userId, comment_text], (err, result) =>{
        if (err) {
            res.status(500).json({success: false, error: err});
        }
        res.json({success: true}); 
    })
})

server.get('/user-comments/:userId', (req, res) => {
    const userId = req.params.userId
    const query = `
    SELECT 
    comment.id, 
    user.username as author,
    comment.comment_text,
    comment.created_at,
    comment.updated_at
    FROM comment
    INNER JOIN user ON comment.userId = user.id
    WHERE userId =?
    `
    db.query(query,[userId], (err, result) =>{
        if (err) {
            res.status(500).json({success: false, error: err});
        }
        res.json({success: true, comment:result});
    })
})
